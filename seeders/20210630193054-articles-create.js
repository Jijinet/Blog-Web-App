'use strict';
const faker = require('faker','image');

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


     var articlesToAdd = [];
     
     for(let i=0; i<20; i++){
       let randomData = {
           title: faker.name.title(),
           content: faker.lorem.paragraphs(20),
           description:faker.lorem.paragraphs(10),
          //  image:faker.image.avatar(),
           published: false,
           createdAt: faker.date.between(2000,2021),
           updatedAt: faker.date.recent(),
                      
         };
         articlesToAdd.push(randomData);
     }
      await queryInterface.bulkInsert('Articles', articlesToAdd, {});


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
