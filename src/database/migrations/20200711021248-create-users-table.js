module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    email: {
      allowNull: true,
      type: Sequelize.STRING,
      unique: true,
    },
    username: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
    },
    phone: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      field: 'created_at',
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      field: 'deleted_at',
      allowNull: true,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('users'),
};
