const tech = ['React', 'Redux', 'Python', 'Java', 'NodeJS', 'Ruby', 'Dev/Ops', 'Rails', 'Security', 'NoSQL', 'Cloud', 'Firewall']
const role = ['Developer', 'Engineer', 'Jr Developer', 'Sr Engineer', 'Lead Engineer', 'Lead Developer']
const title = ['HR Manager', 'CEO', 'CTO', 'Senior Engineer', 'Lead Developer', 'Product Manager']
const status = ['watching', 'applied', 'interviewed', 'offered']
function rand(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let jobs = []

    for (var i = 0; i < 500; i++) {
      jobs.push({
        title: tech[rand(12)] + ' ' + role[rand(6)],
        order: null,
        status: status[rand(4)],
        userId: 1,
        companyId: rand(250) + 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('jobs', jobs);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  }
};
