'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jewelry = sequelize.define('jewelry', {
    name: DataTypes.STRING(255),
    unit_price: DataTypes.INTEGER(11),
  }, {
    timestamps: false,
    tableName: 'jewelries',
    classMethods: {
      associate: function(models) {
        Jewelry.hasMany(models.categories, {
          foreignKey: 'jewelry_type_id',
        });
      },
    },
  });

  return Jewelry;
};
