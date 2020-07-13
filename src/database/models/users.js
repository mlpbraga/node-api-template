const uuid = require('uuidv4');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    underscored: true,
    paranoid: true,
  });

  users.beforeCreate(user => user.id = uuid.uuid());

  users.associate = (models) => {
    // associations can be defined here
  };
  return users;
};
