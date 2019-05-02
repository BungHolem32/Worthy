import db from '../databases/models';
import Jewelry from '../databases/models/jewelry';
import Categories from '../databases/models/category';
import CategoryOptions from '../databases/models/category_option';

/**
 * Get Configuration from database according the jewelry type
 *
 *  Method flow:
 *  - each step at this process depend on his previous
 *  1. get related jewelry according to type
 *  2. get jewelry categories according to the jewelry type
 *  3. filter the ids for the next step
 *  4. get jewelry categories options according to category_ids
 *  5. return configuration
 *
 * @param type
 * @returns {Promise<{jewelry: T | T, jewelryCategories: T | T, jewelryCategoriesIds: *, categoryOptions: T | T}>}
 */
const resolveConfigurationByJewelryType = async type => {

  let jewelry = await (Jewelry(db.sequelize, db.Sequelize)).findOne(
      {where: {name: type}}).then(jewelry => jewelry ? jewelry.toJSON() : {});

  if (!Object.keys(jewelry).length) {
    return {message:`no jewelry found with the name ${type}`,error:'no jewelry found'};
  }

  let jewelryCategories = await (Categories(db.sequelize,
      db.Sequelize)).findAll({where: {jewelry_type_id: jewelry.id}}).
      then(categories =>
          JSON.parse(JSON.stringify(categories)),
      );

  if (!jewelryCategories.length) {
    return {message:`no categories found for jewelry ${jewelry.name}`, error:'no categories '}
  }

  let jewelryCategoriesIds = jewelryCategories.map((categories) => {
    return categories.id;
  });

  if (!jewelryCategoriesIds && !jewelryCategoriesIds.length) {
    return {message:`no categories ids found for jewelry ${jewelry.name}`, error:'no category ids'}
  }

  let categoryOptions = await (CategoryOptions(db.sequelize,
      db.Sequelize)).findAll(
      {whereIn: {[db.Sequelize.Op.in]: jewelryCategoriesIds}}).
      then((options) => JSON.parse(JSON.stringify(options)));

  if (!categoryOptions) {
    return {message:`no category options found for jewelry ${jewelry.name}`,error:'no category options'}
  }

  return {jewelry, jewelryCategories, jewelryCategoriesIds, categoryOptions};
};

export default resolveConfigurationByJewelryType;