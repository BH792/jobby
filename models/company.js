'use strict';
module.exports = (sequelize, DataTypes) => {
  var company = sequelize.define('company', {
    name: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return company;
};
