'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};