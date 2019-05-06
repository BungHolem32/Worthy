/**
 *
 *  Calculate Price according to there configuration:

 *  Method flow:
 *    1. distract relevant variables
 *    2. calculate base price
 *    3. iterate over all categories and calculate ratio price
 *    4. add the base price to the categoryPrice
 *    5. return calculation
 *
 * @param target
 * @param configurations
 * @returns {number}
 */
const calculatePrice = (target, configurations) => {
  let {jewelry, jewelryCategories, categoryOptions} = configurations;
  let basePrice = target.weight * jewelry.unit_price;
  let categoriesPrice = 0;
  jewelryCategories.forEach((category) => {
    let option = categoryOptions.filter((option) => {
      return option.name === target[category.name];
    });

    categoriesPrice += (option[0]['percentage_value'] * basePrice) / 100;
  });

  return  basePrice + categoriesPrice;
};

export default calculatePrice;