'use strict';
module.exports = (sequelize, DataTypes) => {
  var company = sequelize.define('company', {
    name: DataTypes.STRING,
    website: DataTypes.STRING
  });

  company.associate = (models) => {
    company.belongsTo(models.user, {
      foreignKey: 'userId'
    })
  }

  return company;
};
