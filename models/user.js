module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  });

  user.associate = (models) => {
    user.hasMany(models.job);
    user.hasMany(models.contact);
    user.hasMany(models.touch);
  }

  return user;
};
