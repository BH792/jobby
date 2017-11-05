'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', [
      {
        name: 'Google',
        website: 'https://www.google.com',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apple',
        website: 'https://www.apple.com',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Microsoft',
        website: 'https://www.microsoft.com',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Facebook',
        website: 'https://www.facebook.com',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amazon',
        website: 'https://www.amazon.com',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yahoo',
        website: 'https://www.yahoo.com',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null);
  }
};
