const constants = require('./SeedConstants')

const firstName = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon"]
const lastName = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen", "Sanchez", "Wright", "King", "Scott", "Green", "Baker", "Adams"]
const title = ["Applications Specialist​", "Assistant Director of Employment", "Assistant Director of Human Resources", "Assistant HR Manager", "Assistant VP Human Resources", "Associate Director of Human Resources", "Chief Happiness Officer", "Chief Human Resources Officer", "Chief People Officer", "Client Facing Human Resources Specialist", "Compensation Analyst", "Contract Recruiter", "Coordinator of Administrative Services", "Coordinator of Talent Acquisition", "Director of Employment", "Director of Talent", "Employee Relations Leader", "Executive Recruiter", "Human Resources Administrator", "Human Resources Analyst", "Human Resources and Safety Coordinator", "Human Resources Consultant", "Human Resources Team Leader", "Recruiter", "Recruiting Interviewer", "Recruiting Manager", "Senior HR Specialist", "Talent Acquisition Consultant", "Talent Acquisition Manager", "Technical Recruiter"]
function rand(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let contacts = []
    let date = new Date()
    date.setDate(date.getDate() - 17)
    for (var i = 0; i < constants.CONTACTS; i++) {
      contacts.push({
        fullname: firstName[rand(40)] + ' ' + lastName[rand(40)],
        companyId: rand(constants.COMPANIES) + 1,
        userId: 1,
        cellNumber: '555-555-5555',
        officeNumber: '555-555-5555',
        email: 'someemail@emailaddress.com',
        title: title[rand(30)],
        createdAt: date,
        updatedAt: date
      })
    }

    return queryInterface.bulkInsert('contacts', contacts);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
 ['Applications Specialist​', 'Assistant Director of Employment', 'Assistant Director of Human Resources', 'Assistant HR Manager', 'Assistant VP Human Resources', 'Associate Director of Human Resources', 'Chief Happiness Officer', 'Chief Human Resources Officer', 'Chief People Officer', 'Client Facing Human Resources Specialist', 'Compensation Analyst', 'Contract Recruiter', 'Coordinator of Administrative Services', 'Coordinator of Talent Acquisition', 'Director of Employment', 'Director of Talent', 'Employee Relations Leader', 'Executive Recruiter', 'Human Resources Administrator', 'Human Resources Analyst', 'Human Resources and Safety Coordinator', 'Human Resources Consultant', 'Human Resources Team Leader', 'Recruiter', 'Recruiting Interviewer', 'Recruiting Manager', 'Senior HR Specialist', 'Talent Acquisition Consultant', 'Talent Acquisition Manager', 'Technical Recruiter']
