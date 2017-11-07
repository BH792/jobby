const constants = require('./SeedConstants')

const types = ['email', 'phone', 'in-person', 'videochat']

function rand(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let touches = []
    for (var i = 0; i < constants.TOUCHES; i++) {
      touches.push({
        jobId: rand(10) > 0 ? rand(constants.JOBS) + 1 : null,
        contactId: rand(constants.CONTACTS) + 1,
        date: new Date(),
        type: types[rand(4)],
        subject: 'Job Possibility',
        notes: 'I had a touch point with this person, It went really well and met expectations. I am looking to follow up in a few days',
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('touches', touches);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('touches', null, {});
  }
};
