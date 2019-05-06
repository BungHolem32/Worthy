'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jewelry = sequelize.define('jewelry', {
    name: DataTypes.STRING(255),
    unit_price: DataTypes.INTEGER(11),
  }, {
    timestamps: false,
    tableName: 'jewelries',
  });

  return Jewelry;
};