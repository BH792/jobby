const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const verifyJWT = require('../middleware/JWTAuthentication')
const sequelize = require('sequelize')
const {
  user: User,
  company: Company,
  job: Job,
  contact: Contact,
  touch: Touch
} = require('../models');

const Op = sequelize.Op
const router = express.Router();

const saltRounds = 10;

function UserIncludeAll(userId) {
  return User.findOne({
    where: { id: { [Op.eq]: userId } },
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

function createJWTResponse(jwtToken, user) {
  return {
    status: 'SUCCESS',
    user: {
      fullname: user.fullname,
      email: user.email,
      id: user.id
    },
    token: jwtToken
  }
}

router.get('/alldata', verifyJWT, async (req, res, next) => {
  const userData = await UserIncludeAll(req.userId)
  res.json(userData)
})

router.get('/login/reauthenticate', verifyJWT, async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.userId } })
  res.json(createJWTResponse(req.header('Authorization').slice(7), user))
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: { [Op.eq]: email } } })

  if (user) {
    const result = bcrypt.compare(password, user.passwordHash)
    if (result) {
      jwt.sign({ userId: user.id }, process.env.JWT_SECRET, (err, jwtToken) => {
        res.json(createJWTResponse(jwtToken, user))
      })
    } else {
      res.json({status: 'ERROR', msg: 'Wrong password or username'})
    }
  } else {
    res.json({status: 'ERROR', msg: 'No account found please signup'})
  }
})

router.post('/signup', async (req, res) => {
  const { email, password, fullname } = req.body;
  const user = await User.find({ where: { email: { [Op.eq]: email } } })
  if (!user) {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const newUser = await User.create({ email, fullname, passwordHash })
    jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, (err, jwtToken) => {
      res.json(createJWTResponse(jwtToken, newUser))
    })
  } else {
    res.json({status: 'ERROR', msg: 'Sorry, email already taken'})
  }
})

module.exports = router;
