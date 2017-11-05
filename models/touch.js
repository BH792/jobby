'use strict';
module.exports = (sequelize, DataTypes) => {
  var touch = sequelize.define('touch', {
    userId: DataTypes.INTEGER,
    contactId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    type: DataTypes.STRING,
    subject: DataTypes.STRING,
    notes: DataTypes.TEXT
  });

  touch.associate = (models) => {
    touch.belongsTo(models.user, {
      foreignKey: 'userId'
    })

    touch.belongsTo(models.contact, {
      foreignKey: 'contactId'
    })
  }

  return touch;
};
