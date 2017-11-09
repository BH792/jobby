const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const verifyJWT = require('../middleware/JWTAuthentication')

const router = express.Router();
const {
  user: User,
  company: Company,
  job: Job,
  contact: Contact,
  touch: Touch
} = require('../models');

const saltRounds = 10;

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

router.get('/alldata', verifyJWT, (req, res, next) => {
  UserIncludeAll(req.userId)
    .then(userData => {
      res.json(userData)
    })
})

router.get('/login/reauthenticate', verifyJWT, (req, res, next) => {
  User.findOne({
    where: {
      id: req.userId
    }
  })
    .then(user => {
      res.json({
        status: 'SUCCESS',
        user: {
          fullname: user.fullname,
          email: user.email,
          id: user.id
        },
        token: req.header('Authorization').slice(7)
      })
    })
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email
    }
  })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.passwordHash)
          .then(result => {
            if (result) {
              jwt.sign({ userId: user.id }, process.env.JWT_SECRET, function (err, jwtToken) {
                res.json({
                  status: 'SUCCESS',
                  user: {
                    fullname: user.fullname,
                    email: user.email,
                    id: user.id
                  },
                  token: jwtToken
                })
              })
            } else {
              res.json({status: 'ERROR', msg: 'Wrong password or username'})
            }
          })
      } else {
        res.json({status: 'ERROR', msg: 'No account found please signup'})
      }
    })
})

router.post('/signup', (req, res) => {
  const { email, password, fullname } = req.body;
  bcrypt.hash(password, saltRounds)
    .then(passwordHash => {
      User.findOrCreate({
        where: {
          email
        },
        defaults: {
          fullname,
          passwordHash
        }
      })
        .spread((user, created) => {
          if (created) {
            jwt.sign({ userId: user.id }, process.env.JWT_SECRET, function (err, jwtToken) {
              res.json({
                status: 'SUCCESS',
                user: {
                  fullname: user.fullname,
                  email: user.email,
                  id: user.id
                },
                token: jwtToken
              })
            })
          } else {
            res.json({status: 'ERROR', msg: 'sorry already signed up'})
          }
        })
    })
})

module.exports = router;
