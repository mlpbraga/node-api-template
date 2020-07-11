const uuid = require('uuidv4');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    taxpayerId: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    agreeTermsOfService: DataTypes.BOOLEAN,
  }, {
    underscored: true,
    paranoid: true,
  });

  users.beforeCreate(user => user.id = uuid());

  users.associate = (models) => {
    // associations can be defined here
  };
  return users;
};
