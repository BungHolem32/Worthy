'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    jewelry_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    timestamps:false
  });

  return Category;
};