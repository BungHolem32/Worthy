import assert from 'assert';
import calculate from '../../src/libararies/price-calculator';
const expect = require('chai').expect;


const diamondsConfigurations = {
  jewelry: {id: 1, name: 'diamond', unit_price: 1000},
  jewelryCategories: [
    {id: 1, name: 'color'},
    {id: 2, name: 'cut'},
    {id: 3, name: 'clarity'},
  ],
  categoryOptions: [
    {
      id: 2,
      category_id: 1,
      name: 'very good',
      percentage_value: '10',
    },
    {id: 3, category_id: 1, name: 'good', percentage_value: '0'},
    {id: 6, category_id: 2, name: 'd', percentage_value: '30'},
    {id: 7, category_id: 2, name: 'e', percentage_value: '30'},
    {id: 37, category_id: 3, name: 'si3', percentage_value: '-20'},
    {id: 38, category_id: 3, name: 'i1', percentage_value: '-30'},
    {id: 39, category_id: 3, name: 'i2', percentage_value: '-30'},
    {id: 40, category_id: 3, name: 'i3', percentage_value: '-30'},
  ],
};

let targetDiamond = {
  weight:10,
  cut:'very good',
  color:'e',
  clarity:'i2'
};

describe('Price Calculator', () => {
  it('should return number',() => {
    const price = calculate(targetDiamond,diamondsConfigurations);
    expect(price).to.be.a('number');
  });

  it('should return the expected jewelry price',() => {
    let basePrice = (10 * 1000);
    let result = basePrice + ((basePrice * 10) /100) + ((basePrice * 30) / 100) + ((basePrice * -30) / 100);
    const price = calculate(targetDiamond,diamondsConfigurations);
    assert.equal(price, result)
  });

});


