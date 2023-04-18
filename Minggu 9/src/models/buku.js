'use strict';
const {
  Model
} = require('sequelize');
const kategoribuku = require('./kategoribuku');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.KategoriBuku)
    }
  }
  Buku.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tahunTerbit: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Buku',
    tableName: "buku",
    underscored: true,
  });
  return Buku;
};