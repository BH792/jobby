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

router.post('/changeorder', async (req, res) => {
  const { increment = [], decrement = [] } = req.body
  console.log(increment, decrement);
  // TODO: Verify jobIds belong to this user
  const [ incr, decr ] = await Promise.all([
    Job.increment({ 'order': 1 }, { where: { id: { [Op.in]: increment } } }),
    Job.increment({ 'order': -1 }, { where: { id: { [Op.in]: decrement } } })
  ])
  if (incr && decr) {
    res.json({
      status: 'SUCCESS',
      incr,
      decr
    })
  } else {
    res.json({
      status: 'ERROR',
      msg: 'Error updating job orders'
    })
  }
})

router.get('/', async (req, res, next) => {
  const board = await Job.findAll({
    where: {
      userId: { [Op.eq]: req.userId },
      order: { [Op.ne]: null }
    },
    attributes: ['id', 'status', 'order'],
    order: [
      ['status', 'ASC'],
      ['order', 'ASC']
    ]
  })
  if (board) {
    res.json({
      status: 'SUCCESS',
      board
    })
  } else {
    res.json({
      status: 'ERROR',
      msg: 'Error fetching dashboard'
    })
  }
});

module.exports = router;
