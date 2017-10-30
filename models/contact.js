'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
    fullname: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return contact;
};