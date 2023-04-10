const Sequelize = require("sequelize");
const sequelize = new Sequelize("wsinf20222m8", "root", "", {
    dialect: "mysql",
    host: "localhost",
    logging: console.log
});

const { Model, DataTypes } = Sequelize;

class User extends Model { }
class Log extends Model { }

User.init({
    username: {
        type: DataTypes.STRING(255),
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    apiKey: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    quota: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false
});

Log.init({

}, {
    sequelize,
    underscored: true,
    updatedAt: false
});

User.hasMany(Log);
Log.belongsTo(User);

(
    async () => {
        await sequelize.sync({ force: true });
        await User.create({
            username: "admin",
            password: "$2a$12$Lxidx4OZCFVBVcJGqb52RedJ71QcHFlSMl7LOQ8/0GUQlZtBNVnby",
            apiKey: "ut38cp369qi",
            role: 1
        })
    }
)();