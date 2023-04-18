'use strict';

const kategoriBuku = require('../models/kategoribuku');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('buku', "kategori_buku_id", 
    {
      type: Sequelize.INTEGER,
      references: {
        model: "kategori_buku",
        key: "id"
      }
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('buku', "kategori_buku_id");
  }
};
