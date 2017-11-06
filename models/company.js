'use strict';
module.exports = (sequelize, DataTypes) => {
  var company = sequelize.define('company', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    website: DataTypes.STRING
  });

  company.associate = (models) => {
    company.belongsTo(models.user, {
      foreignKey: 'userId'
    })

    company.hasMany(models.job)
    company.hasMany(models.contact)
  }

  return company;
};
