'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        id: 1,
        name: 'Ashley Galvin'
      },
      {
        id: 2,
        name: 'Patrick Beach'
      },
      {
        id: 3,
        name: 'MacKenzie Miller'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};
