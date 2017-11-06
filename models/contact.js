module.exports = (sequelize, DataTypes) => {
  var contact = sequelize.define('contact', {
    fullname: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    cellNumber: DataTypes.STRING(15),
    officeNumber: DataTypes.STRING(15),
    email: DataTypes.STRING,
    title: DataTypes.STRING
  });

  contact.associate = (models) => {
    contact.hasMany(models.touch);

    contact.belongsTo(models.user, {
      foreignKey: 'userId'
    });

    contact.belongsTo(models.company, {
      foreignKey: 'companyId'
    });
  }

  return contact;
};
