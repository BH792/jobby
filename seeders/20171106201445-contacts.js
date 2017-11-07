const constants = require('./SeedConstants')

const firstName = ["Perla", "Cayla", "Annamarie", "Demarcus", "Corie", "Mavis", "Cora", "Cody", "Rayford", "Luanne", "Marth", "Kyoko", "Jeanice", "Glen", "Terra", "Corinne", "Teressa", "Hannelore", "Alonzo", "Billy", "Phoebe", "Elisha", "Doug", "Alfonso", "Martina", "Willene", "Siobhan", "Jenette", "Nicola", "Lelia", "Flossie", "Olimpia", "Rosalba", "Lila", "Kelli", "Cheree", "Dalia", "Meredith", "Rhonda", "Clara", "Emilio", "Guy", "Providencia", "Matt", "Cinderella", "Magali", "Alvin", "Franchesca", "Irwin", "Genia"]
const lastName = ["Souder", "Lovins", "Marquerite", "Maben", "Vanderhoff", "Pavon", "Caputo", "Barter", "Hy", "Stoughton", "Dahlen", "Leake", "Govea", "Bramble", "Unger", "Lape", "Sulton", "Hammel", "Gooch", "Ducan", "Meighan", "Hubbs", "Gormley", "Mccabe", "Sequeira", "Reinhardt", "Schuler", "Minardi", "Russell", "Pelt"]
const title = ['HR Manager', 'CEO', 'CTO', 'Senior Engineer', 'Lead Developer', 'Product Manager']
function rand(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let contacts = []

    for (var i = 0; i < constants.CONTACTS; i++) {
      contacts.push({
        fullname: firstName[rand(50)] + ' ' + lastName[rand(30)],
        companyId: rand(constants.COMPANIES) + 1,
        userId: 1,
        cellNumber: '555-555-5555',
        officeNumber: '555-555-5555',
        email: 'someemail@emailaddress.com',
        title: title[rand(6)],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('contacts', contacts);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
