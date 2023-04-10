const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const Sequelize = require("sequelize");
const sequelize = new Sequelize("wsinf20222m8", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: console.log,
});

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Model, DataTypes, Op } = Sequelize;

class User extends Model {}
class Log extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING(255),
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    apiKey: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    quota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
  }
);

Log.init(
  {},
  {
    sequelize,
    underscored: true,
    updatedAt: false,
  }
);

User.hasMany(Log);
Log.belongsTo(User);

// API key
// Functions
async function cekApiKey(req,res,next){

  // API key
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).send("Unauthorized");
  }

  // USER
  const user = await User.findOne({
    where: {
      apiKey: apiKey
    }
  });
  if (!user) {
    return res.status(400).send("Invalid API key!");
  }

  req.user = user;

  next();
}

function cekApiKeyAdmin(req,res,next){

  let role = req.user.role;
  if (role != 1) {
    return res.status(403).send("Forbidden")
  }

  next();
}

// Points
// REGISTER
app.post("/api/register", async (req,res) => {

  let {username,password} = req.body;

  const user = await User.create({
    username: username,
    password: bcrypt.hashSync(password, 12),
    apiKey: Math.random().toString(36).split(".")[1]
  })

  return res.status(201).send({
    username: user.username,
    apiKey: user.apiKey
  })
})

// MEMBBER
app.get("/api/key/member1", async (req,res) => {

  // API key
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).send("Unauthorized");
  }

  // USER
  const user = await User.findOne({
    where: {
      apiKey: apiKey
    }
  });
  if (!user) {
    return res.status(400).send("Invalid API key!");
  }

  req.user = user;

  next();

  // OK
  return res.status(200).send(`Hello ${user.username}!`);
})
app.get("/api/key/member2", cekApiKey, async (req,res) => {

  const user = req.user;
  
  // OK
  return res.status(200).send(`Hello ${user.username}!`);
})

// ADMIN
app.get("/api/key/admin", [cekApiKey, cekApiKeyAdmin], async (req,res) => {

  const user = req.user;
  
  // ut38cp369qi

  // OK
  return res.status(200).send(`Hello admin: ${user.username}!`);
})

// Jsonwebtoken
// jwt.io web check jwt

// Functions

function cekToken(req,res,next){
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(401).send("Unauthorized")
  }

  try {
    const user = jwt.verify(token, PRIVATE_KEY);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}

function cekTokenAdmin(req,res,next){
  if (req.user.role != 1) {
    return res.status(403).send("Forbidden");
  }
  next();
}


// Points

// KALAU DI PRODUCTION (Sudah deploy) JANGAN SIMPAN PRIVATE KEY DI SOURCE CODE
// BIASANYA PRIVATE KEY DISIMPAN DI .env ATAU DI TEMPAT TERSEMBUNYI LAIN
// (MISAL DI ENVIRONMENT VARIABLE PC)
const PRIVATE_KEY = "aawkeujtgkdasjfbasdmalsdhfgdaskjgh";

// LOGIN
app.post("/api/login", async (req,res) => {
  let {username,password} = req.body;
  const user = await User.findByPk(username);
  if (!user) {
    return res.status(400).send("Invalid username / password!");
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).send("Invalid username / password!");
  }

  const token = jwt.sign({
    username: user.username,
    role: user.role
  }, PRIVATE_KEY, {
    expiresIn: 30, // expired dalam 30 detik
    notBefore: 10, // baru boleh dipakai 10 detik setelah dibuat
  })

  return res.status(200).send({
    token: token
  });
})

app.get("/api/key/member1", cekToken, async (req,res) => {

  const user = req.user;

  // OK
  return res.status(200).send(`Hello ${user.username}!`);
})

app.get("/api/key/admin", [cekToken,cekTokenAdmin], async (req,res) => {

  const user = req.user;

  // OK
  return res.status(200).send(`Hello ${user.username}!`);
})

app.post("/api/topup", cekApiKey, async (req,res) => {
  const quota = parseInt(req.body.quota);
  const user = req.user;

  await user.increment({quota:quota});
  await user.reload();

  return res.status(200).send({
    username: user.username,
    role: user.role,
    quota: user.quota
  })
})

// mm0eqq6q6qr

async function cekQuota(req,res,next){
  const user = req.user;
  if (user.quota <= 0) {
    return res.status(400).send("Quota habis!");
  }
  next();
}
async function decrementQuota(req,res,next){
  const user = req.user;
  await user.increment({quota: -1});
  await user.reload();
  next();
}

async function logAccess(req,res,next){
  const user = req.user;
  await Log.create({
    UserUsername: user.username
  });
  next();
}

async function rateLimit(req,res,next){
  const user = req.user;
  const count = await Log.count({
    where: {
      UserUsername: user.username,
      createdAt: {
        [Op.gte]: Date.now() - 10000
      }
    }
  })
  if (count > 10) {
    return res.status(429).send("Too Many Request!");
  }
  next();
}

app.get("/api/premium", [cekApiKey, rateLimit, logAccess,cekQuota,decrementQuota], (req,res) => {

  const user = req.user;

  return res.status(200).send(`Hello premium user ${user.username}!`);
})

const port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
