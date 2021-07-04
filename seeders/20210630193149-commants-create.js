'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */



     var commentsToAdd = [];
     for(let i=0; i<20; i++){
       let randomData = {
       
           content:faker.lorem.text(),
           createdAt: faker.date.between(2000,2021),
           updatedAt: faker.date.recent()
         };
         commentsToAdd.push(randomData);
     }
      await queryInterface.bulkInsert('Comments', commentsToAdd, {});



  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
