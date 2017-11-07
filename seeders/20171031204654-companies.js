const constants = require('./SeedConstants')

const one = ["Openlane", "Yearin", "Goodsilron", "Condax", "Opentech", "Golddex", "year-job", "Isdom", "Gogozoom", "Y-corporation", "Nam-zim", "Donquadtech", "Warephase", "Donware", "Faxquote", "Sunnamplex", "Lexiqvolax", "Sumace", "Treequote", "Iselectrics", "Zencorporation", "Plusstrip", "dambase", "Toughzap", "Codehow", "Zotware", "Statholdings", "Conecom", "Zathunicon", "Labdrill", "Ron-tech", "Green-Plus", "Groovestreet", "Zoomit", "Bioplex", "Zumgoity", "Scotfind"]
const two = ["Dalttechnology", "Kinnamplus", "Konex", "Stanredtax", "Cancity", "Finhigh", "Kan-code", "Blackzim", "Dontechi", "Xx-zobam", "Fasehatice", "Hatfan", "Streethex", "Inity", "Konmatfix", "Bioholding", "Hottechi", "Ganjaflex", "Betatech", "Domzoom", "Ontomedia", "Newex", "Betasoloin", "Mathtouch", "Rantouch", "Silis", "Plussunin", "Plexzap", "Finjob", "Xx-holding", "Scottech", "Funholding", "Sonron", "Singletechno", "Rangreen", "J-Texon", "Rundofase"]
function rand(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let companies = []

    for (var i = 0; i < constants.COMPANIES; i++) {
      companies.push({
        name: one[rand(37)] + ' ' + two[rand(37)],
        website: 'https://www.google.com',
        description: 'Some company that makes widgets and sells them for more than the cost of manufacture',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('companies', companies);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null);
  }
};
