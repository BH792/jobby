const constants = require('./SeedConstants')

const types = ['email', 'phone', 'in-person', 'videochat']
const subjects = ['Job Possibility', 'Interview', 'Coffee Meeting', 'Phone Interview', 'Meet Up Event', 'Meeting', 'Introduction']

function rand(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let touches = []
    for (var i = 0; i < constants.TOUCHES; i++) {
      let date = new Date()
      date.setDate(date.getDate() - rand(7) - 7)
      touches.push({
        jobId: rand(10) > 0 ? rand(constants.JOBS) + 1 : null,
        contactId: rand(constants.CONTACTS) + 1,
        date: date,
        type: types[rand(4)],
        subject: subjects[rand(7)],
        notes: 'I had a touch point with this person, It went really well and met expectations. I am looking to follow up in a few days',
        createdAt: date,
        updatedAt: date
      })
    }

    for (var i = 0; i < 4; i++) {
      let date = new Date()
      date.setDate(date.getDate() + rand(7) + 1)
      touches.push({
        jobId: rand(10) > 0 ? rand(constants.JOBS) + 1 : null,
        contactId: rand(constants.CONTACTS) + 1,
        date: date,
        type: types[rand(4)],
        subject: subjects[rand(7)],
        notes: 'I had a touch point with this person, It went really well and met expectations. I am looking to follow up in a few days',
        createdAt: date,
        updatedAt: date
      })
    }
    return queryInterface.bulkInsert('touches', touches);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('touches', null, {});
  }
};
