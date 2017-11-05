const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { job: Job, company: Company } = require('../models')

router.use(verifyJWT)

router.get('/', function (req, res, next) {
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
