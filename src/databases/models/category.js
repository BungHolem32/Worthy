'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    jewelry_type_id: DataTypes.INTEGER(11),
    name: DataTypes.STRING(255)
  }, {
    timestamps:false,
    classMethods: {
      associate : function(models) {
        Category.belongsTo(models.jewelries,{
          foreignKey:'jewelry_type_id'
        })
      },
    },
  });

  return Category;
};