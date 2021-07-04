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

     var tagsToAdd = [];
     for(let i=0; i<10; i++){
       let randomData = {
       
           name:faker.random.words(3),
           createdAt: faker.date.between(2000,2021),
           updatedAt: faker.date.recent()
         };
         tagsToAdd.push(randomData);
     }
      await queryInterface.bulkInsert('Tags', tagsToAdd, {});

    
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
