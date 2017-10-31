'use strict';
module.exports = (sequelize, DataTypes) => {
  var job = sequelize.define('job', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    order: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job;
};
