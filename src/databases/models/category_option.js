'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryOption = sequelize.define('category_option', {
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    percentage_value: DataTypes.STRING
  }, {
    timestamps:false,
    tableName:'categories_options'
  });

  return CategoryOption;
};