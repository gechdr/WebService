const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");
// npm install sequelize sqlite3

const { Model, DataTypes } = Sequelize;

class Product extends Model { }
class Cart extends Model { }

Product.init({
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize
});

Cart.init({
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize
});

Product.hasMany(Cart);
Cart.belongsTo(Product);

async function init() {
    await sequelize.sync({ force: true });
    await Product.bulkCreate([
        { name: "Instant Ramen", weight: 100, price: 1000 },
        { name: "Beef", weight: 1000, price: 75000 },
        { name: "Rice", weight: 10000, price: 50000 },
    ]);
    await Cart.bulkCreate([
        { ProductId: 1, amount: 3 },
        { ProductId: 2, amount: 2 },
        { ProductId: 3, amount: 1 },
    ]);
    console.log("Isi tabel barang: ");
    console.log(JSON.stringify(await Product.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } }), null, 2));
    console.log("Isi tabel cart: ");
    console.log(JSON.stringify(await Cart.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } }), null, 2));
}

init()

module.exports = {
    Sequelize, sequelize, Product, Cart
}