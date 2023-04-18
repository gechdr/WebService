'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("buku", [
      {
        id: 1,
        nama: "wkwkwk",
        tahun_terbit: 1990,
        created_at: Sequelize.fn("now"),
        updated_at: Sequelize.fn("now")
      },
      {
        id: 2,
        nama: "lol",
        tahun_terbit: 1999,
        created_at: Sequelize.fn("now"),
        updated_at: Sequelize.fn("now")
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('buku', null, {});

  }
};
