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
const sequelize = require('sequelize')
const Op = sequelize.Op

router.use(verifyJWT)

router.get('/', function (req, res, next) {
  Job.findAll({
    where: {
      userId: { [Op.eq]: req.userId },
      order: { [Op.ne]: null }
    },
    attributes: ['id', 'status', 'order'],
    order: [
      ['status', 'ASC'],
      ['order', 'ASC']
    ]
  }).then(results => {res.json(results)})
});

module.exports = router;
