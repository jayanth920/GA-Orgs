'use strict';
module.exports = (sequelize, DataTypes) => {
  const icecream = sequelize.define('icecream', {
    brand: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  icecream.associate = function(models) {
    // associations can be defined here
  };
  return icecream;
};
