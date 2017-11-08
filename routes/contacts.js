const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { contact: Contact, company: Company } = require('../models')

router.use(verifyJWT)

router.post('/:id', function (req, res, next) {
  const updatedContactInfo = {
    userId: req.userId,
    companyId: req.body.companyId,
    fullname: req.body.fullname || null,
    title: req.body.title || null,
    cellNumber: req.body.cellNumber || null,
    officeNumber: req.body.officeNumber || null,
    email: req.body.email || null
  }

  Contact.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })
    .then(contact => {
      if (contact) {
        if (updatedContactInfo.companyId) {
          contact.update({ ...updatedContactInfo })
          .then(updatedContact => {
            res.json({
              status: 'SUCCESS',
              contact: updatedContact
            })
          })
        } else {
          Company.create({
            name: req.body.companyName,
            userId: req.userId
          })
            .then(company => {
              contact.update({
                ...updatedContactInfo,
                companyId: company.id
              })
                .then(updatedContact => {
                  res.json({
                    status: 'SUCCESS',
                    contact: updatedContact,
                    company
                  })
                })
            })
        }
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
    userId: req.userId,
    companyId: req.body.companyId,
    fullname: req.body.fullname || null,
    title: req.body.title || null,
    cellNumber: req.body.cellNumber || null,
    officeNumber: req.body.officeNumber || null,
    email: req.body.email || null
  }

  if (newContact.companyId) {
    Contact.create({ ...newContact })
      .then(contact => {
        res.json({
          status: 'SUCCESS',
          contact
        })
      })
  } else {
    Company.create({
      name: req.body.companyName,
      userId: req.userId
    })
      .then(company => {
        Contact.create({
          ...newContact,
          companyId: company.id
        })
          .then(contact => {
            res.json({
              status: 'SUCCESS',
              contact,
              company
            })
          })
      })
  }
})

module.exports = router;
