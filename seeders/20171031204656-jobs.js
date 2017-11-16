const constants = require('./SeedConstants')


const description = `Web Developer Job Responsibilities:
The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.

-Regular exposure to business stakeholders and executive management, as well as the authority and scope to apply your expertise to many interesting technical problems.
-Candidate must have a strong understanding of UI, cross-browser compatibility, general web functions and standards.
-The position requires constant communication with colleagues.
-Experience in planning and delivering software platforms used across multiple products and organizational units.
-Deep expertise and hands on experience with Web Applications and programming languages such as HTML, CSS, JavaScript, JQuery and API's.
-Deep functional knowledge or hands on design experience with Web Services (REST, SOAP, etc ..) is needed to be successful in this position.
-Strong grasp of security principles and how they apply to E-Commerce applications.

Web Developer Skills and Qualifications:

JavaScript, JQuery, HTML, HTML5, CSS, CSS3, Web Programming Skills, E-Commerce, Teamwork, Verbal Communication, cross-browser compatibility, Web User Interface Design (UI), Security Principles, Object-Oriented Design, Web Services (REST/SOAP), Multimedia Content Development, APIs`

const tech = ['React', 'Redux', 'Python', 'Java', 'NodeJS', 'Ruby', 'Dev/Ops', 'Rails', 'Security', 'NoSQL', 'Cloud', 'Firewall', 'AWS', 'Elixir', 'JavaScript', 'Angular', 'C++', 'Swift', 'Mobile', 'PHP', 'C#', '.NET', 'C', 'Elm', 'Golang', 'COBOL', 'Rust', 'Scala', 'Android', 'Perl']
const role = ['Developer', 'Engineer', 'Jr Developer', 'Sr Engineer', 'Lead Engineer', 'Lead Developer']
const status = ['watching', 'applied', 'interviewed', 'offered']
function rand(max) {
  return Math.floor(Math.random() * max)
}

function* orderGen() {
  var order = 0
  while (true) {
    yield order++
  }
}

const orderMaker = {
  watching: orderGen(),
  applied: orderGen(),
  interviewed: orderGen(),
  offered: orderGen(),
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let jobs = []
    let date = new Date()
    date.setDate(date.getDate() - 17)
    for (var i = 0; i < constants.JOBS; i++) {
      const jobStatus = status[rand(4)]
      const jobOrder = rand(2) > 0 ? orderMaker[jobStatus].next().value : null
      jobs.push({
        title: tech[rand(30)] + ' ' + role[rand(6)],
        order: jobOrder,
        status: jobStatus,
        userId: 1,
        companyId: rand(constants.COMPANIES) + 1,
        description,
        createdAt: date,
        updatedAt: date
      })
    }

    return queryInterface.bulkInsert('jobs', jobs);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  }
};
