module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
    fullname: DataTypes.STRING,
    title: DataTypes.STRING
  });

  contact.associate = (models) => {
    contact.hasMany(models.touch);

    contact.belongsTo(models.user, {
      foreignKey: 'userId'
    });
  }

  return contact;
};
