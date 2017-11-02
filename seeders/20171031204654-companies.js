'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('companies', [
      {
        name: 'Google',
        website: 'https://www.google.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apple',
        website: 'https://www.apple.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Microsoft',
        website: 'https://www.microsoft.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Facebook',
        website: 'https://www.facebook.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amazon',
        website: 'https://www.amazon.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yahoo',
        website: 'https://www.yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null);
  }
};
