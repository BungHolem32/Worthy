'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoryOption = sequelize.define('category_option', {
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    percentage_value: DataTypes.STRING
  }, {
    timestamps:false,
    tableName:'categories_options'
  });
  categoryOption.associate = function(models) {
    // categoryOption.belongsTo(models.categories,{
    //   foreignKey:'category_id',
    //   targetKey: 'category_id',
    // })
  };
  return categoryOption;
};