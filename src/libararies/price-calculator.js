/**
 *
 *  Calculate Price according to 2 params:
 *  1. target data;
 *  2. related configurations
 *
 *  Method flow:
 *    1. distract relevant variables
 *    2. calculate base price
 *    3. iterate over all categories and sum price according to them
 *    4. add the base price to the sum
 *    5. return results
 *
 * @param target
 * @param configurations
 * @returns {number}
 */
const calculatePrice = (target, configurations) => {
  let {jewelry, jewelryCategories, categoryOptions} = configurations;
  let basePrice = target.weight * jewelry.unit_price;
  let price = 0;
  jewelryCategories.forEach((category) => {
    let option = categoryOptions.filter((option) => {
      return option.name === target[category.name];
    });

    price += (option[0]['percentage_value'] * basePrice) / 100;
  });

  return price + basePrice;
};

export default calculatePrice;