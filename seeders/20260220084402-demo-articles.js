'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [
      {
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        published: new Date('2020-01-08 15:02:30'),
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Morning vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        published: new Date('2020-04-14 15:02:41'),
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
        published: new Date('2020-05-28 15:02:55'),
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};