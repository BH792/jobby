const constants = require('./SeedConstants')

const adj = ["Internal", "Maddening", "Aquatic", "Unsightly", "Worthless", "Finicky", "Oval", "Adhesive", "Puffy", "Useful", "Icky", "Gray", "Meaty", "Penitent", "Bright", "Handy", "Innate", "Momentous", "Cumbersome", "Profuse", "Changeable", "Instinctive", "Soggy", "Axiomatic", "Unarmed", "Splendid", "Neighborly", "Complex", "Ruthless", "Spiky", "Pumped", "Demonic", "Wistful", "Homely", "Nimble", "Dispensable", "Tearful", "Polite", "Nifty", "Grand"]
const noun = ["Quill", "Van", "Bridge", "Cabbage", "Destruction", "Vacation", "Camp", "Fold", "Minister", "Tank", "Join", "Title", "Wheel", "Pleasure", "Brake", "Part", "Border", "Potato", "Glove", "Furniture", "Song", "Channel", "Train", "Jail", "Amusement", "Fang", "Shame", "Blade", "Sleet", "Show", "Boy", "Dog", "Rabbits", "Grade", "Crime", "Toad", "Plantation", "Earthquake", "Grain", "Stretch"]
function rand(max) {
  return Math.floor(Math.random() * max)
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let companies = []
    let date = new Date()
    date.setDate(date.getDate() - 17)
    for (var i = 0; i < constants.COMPANIES; i++) {
      companies.push({
        name: adj[rand(40)] + ' ' + noun[rand(40)],
        website: 'https://www.google.com',
        description: 'Some company that makes widgets and sells them for more than the cost of manufacture',
        userId: 1,
        createdAt: date,
        updatedAt: date
      })
    }

    return queryInterface.bulkInsert('companies', companies);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null);
  }
};
['internal', 'maddening', 'aquatic', 'unsightly', 'worthless', 'finicky', 'oval', 'adhesive', 'puffy', 'useful', 'icky', 'gray', 'meaty', 'penitent', 'bright', 'handy', 'innate', 'momentous', 'cumbersome', 'profuse', 'changeable', 'instinctive', 'soggy', 'axiomatic', 'unarmed', 'splendid', 'neighborly', 'complex', 'ruthless', 'spiky', 'pumped', 'demonic', 'wistful', 'homely', 'nimble', 'dispensable', 'tearful', 'polite', 'nifty', 'grand']
