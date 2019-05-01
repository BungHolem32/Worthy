'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let records = [
      { category_id:'1',name:'ideal',percentage_value:'20'},
      { category_id:'1',name:'very good',percentage_value:'10'},
      { category_id:'1',name:'good',percentage_value:'0'},
      { category_id:'1',name:'fair',percentage_value:'-10'},
      { category_id:'1',name:'poor',percentage_value:'-20'},
      { category_id:'2',name:'d',percentage_value:'30'},
      { category_id:'2',name:'e',percentage_value:'30'},
      { category_id:'2',name:'f',percentage_value:'30'},
      { category_id:'2',name:'g',percentage_value:'20'},
      { category_id:'2',name:'h',percentage_value:'20'},
      { category_id:'2',name:'i',percentage_value:'10'},
      { category_id:'2',name:'j',percentage_value:'10'},
      { category_id:'2',name:'k',percentage_value:'0'},
      { category_id:'2',name:'l',percentage_value:'0'},
      { category_id:'2',name:'m',percentage_value:'0'},
      { category_id:'2',name:'n',percentage_value:'-10'},
      { category_id:'2',name:'o',percentage_value:'-10'},
      { category_id:'2',name:'p',percentage_value:'-10'},
      { category_id:'2',name:'q',percentage_value:'-10'},
      { category_id:'2',name:'r',percentage_value:'-10'},
      { category_id:'2',name:'s',percentage_value:'-20'},
      { category_id:'2',name:'t',percentage_value:'-20'},
      { category_id:'2',name:'u',percentage_value:'-20'},
      { category_id:'2',name:'v',percentage_value:'-30'},
      { category_id:'2',name:'w',percentage_value:'-30'},
      { category_id:'2',name:'x',percentage_value:'-30'},
      { category_id:'2',name:'y',percentage_value:'-30'},
      { category_id:'2',name:'z',percentage_value:'-30'},
      { category_id:'3',name:'fl',percentage_value:'20'},
      { category_id:'3',name:'if',percentage_value:'10'},
      { category_id:'3',name:'vvs1',percentage_value:'0'},
      { category_id:'3',name:'vvs2',percentage_value:'0'},
      { category_id:'3',name:'vs1',percentage_value:'-10'},
      { category_id:'3',name:'vs2',percentage_value:'-10'},
      { category_id:'3',name:'si1',percentage_value:'-20'},
      { category_id:'3',name:'si2',percentage_value:'-20'},
      { category_id:'3',name:'si3',percentage_value:'-20'},
      { category_id:'3',name:'i1',percentage_value:'-30'},
      { category_id:'3',name:'i2',percentage_value:'-30'},
      { category_id:'3',name:'i3',percentage_value:'-30'}
    ];

    return queryInterface.bulkInsert('categories_options', records, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories_options', null, {});
  }
};
