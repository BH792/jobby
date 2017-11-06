'use strict';
module.exports = (sequelize, DataTypes) => {
  var job = sequelize.define('job', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    order: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  });

  job.associate = (models) => {
    job.belongsTo(models.company, {
      foreignKey: 'companyId'
    });

    job.belongsTo(models.user, {
      foreignKey: 'userId'
    });

    job.hasMany(models.touch)
  }

  return job;
};
