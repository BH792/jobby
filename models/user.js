module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  });

  return user;
};
