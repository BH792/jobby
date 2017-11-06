'use strict';
module.exports = (sequelize, DataTypes) => {
  var touch = sequelize.define('touch', {
    jobId: DataTypes.INTEGER,
    contactId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    subject: DataTypes.STRING,
    notes: DataTypes.TEXT
  });

  touch.associate = (models) => {
    touch.belongsTo(models.job, {
      foreignKey: 'jobId'
    })

    touch.belongsTo(models.contact, {
      foreignKey: 'contactId'
    })
  }

  return touch;
};
