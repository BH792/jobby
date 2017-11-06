const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const {
  user: User,
  company: Company,
  job: Job,
  contact: Contact,
  touch: Touch
} = require('../models');

router.use(verifyJWT)

function UserIncludeAll(userId) {
  return User.findOne({
    where: { id: userId },
    include: [
      {
        model: Company,
        include: [
          {
            model: Job,
            include: [ Touch ]
           },
          {
            model: Contact,
            include: [ Touch ]
          }
        ]
      }
    ]
  })
}

router.get('/test', (req, res, next) => {
  UserIncludeAll(req.userId)
    .then(userData => {
      res.json(userData)
    })
})

router.get('/', function (req, res, next) {
  // Company.findAll({
  //   where: {
  //     userId: req.userId
  //   },
  //   include: [
  //     {
  //       model: Job
  //     }
  //   ]
  // })
  //   .then(results => {res.json(results)})
  Job.findAll({
    where: {
      userId: req.userId
    },
    // order: [['order', 'ASC']],
    include: [
      {
        model: Company
      }
    ]
  }).then(results => {res.json(results)})
});

module.exports = router;
