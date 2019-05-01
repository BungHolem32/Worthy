'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let categories = [
      {jewelry_type_id:1,name:'cut'},
      {jewelry_type_id:1,name:'color'},
      {jewelry_type_id:1,name:'clarity'},
    ];

    return queryInterface.bulkInsert('categories', categories, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('categories', null, {});
  }
};
