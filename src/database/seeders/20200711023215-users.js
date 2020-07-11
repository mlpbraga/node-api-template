const faker = require('faker-br');
const bcrypt = require('bcryptjs');
const uuid = require('uuidv4');

const clients = [1, 2, 3, 4, 5].map((index) => ({
  id: uuid.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  username: faker.phone.phoneNumber().replace(/\D/g, ''),
  password: bcrypt.hashSync('123'),
  phone: faker.phone.phoneNumber().replace(/\D/g, ''),
  created_at: faker.date.past(),
  updated_at: faker.date.past(),
}));


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    clients, {
    underscored: true,
  }),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {})
};
