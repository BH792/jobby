const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { contact: Contact, user: User } = require('../models')

router.use(verifyJWT)

router.post('/:id', function (req, res, next) {
  let updatedContactInfo = {
    fullname: req.body.fullname || null,
    title: req.body.title || null
  }

  Contact.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })
    .then(contact => {
      if (contact) {
        contact.update({ ...updatedContactInfo })
        .then(updatedContact => {
          res.json({
            status: 'SUCCESS',
            contact: updatedContact
          })
        })
      } else {
        res.json({status: 'ERROR', msg: 'no contact found'})
      }
    })
})

router.get('/', function (req, res, next) {
  Contact.findAll({
    where: {
      userId: req.userId
    }
  })
    .then(contacts => {
      res.json({
        status: 'SUCCESS',
        contacts
      })
    })
})

router.post('/', function (req, res, next) {
  const newContact = {
    fullname: req.body.fullname || null,
    title: req.body.title || null,
    userId: req.userId
  }

  Contact.create({ ...newContact })
    .then(contact => {
      res.json({
        status: 'SUCCESS',
        contact
      })
    })
})

module.exports = router;
