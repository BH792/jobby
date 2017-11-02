const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const router = express.Router();
const { user: User } = require('../models');

const saltRounds = 10;

router.post('/login', function (req, res) {
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
                  type: 'SUCCESS',
                  user: {
                    fullname: user.fullname,
                    email: user.email,
                    id: user.id
                  },
                  token: jwtToken
                })
              })
            } else {
              res.json({type: 'ERROR', msg: 'Wrong password or username'})
            }
          })
      } else {
        res.json({type: 'ERROR', msg: 'No account found please signup'})
      }
    })
})

router.post('/signup', function (req, res) {
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
                user: {
                  fullname: user.fullname,
                  email: user.email
                },
                token: jwtToken
              })
            })
          } else {
            res.json({type: 'ERROR', msg: 'sorry already signed up'})
          }
        })
    })
})

module.exports = router;
