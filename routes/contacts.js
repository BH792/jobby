const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { contact: Contact, company: Company } = require('../models')

router.use(verifyJWT)

router.post('/:id', async (req, res, next) => {
  const updatedContactInfo = {
    userId: req.userId,
    companyId: req.body.companyId,
    fullname: req.body.fullname || null,
    title: req.body.title || null,
    cellNumber: req.body.cellNumber || null,
    officeNumber: req.body.officeNumber || null,
    email: req.body.email || null
  }

  const contact = await Contact.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })

  if (contact) {
    if (updatedContactInfo.companyId) {
      const updatedContact = await contact.update({ ...updatedContactInfo })
      res.json({
        status: 'SUCCESS',
        contact: updatedContact
      })
    } else {
      const company = await Company.create({
        name: req.body.companyName,
        userId: req.userId
      })
      const updatedContact = await contact.update({
        ...updatedContactInfo,
        companyId: company.id
      })
      res.json({
        status: 'SUCCESS',
        contact: updatedContact,
        company
      })
    }
  } else {
    res.json({status: 'ERROR', msg: 'no contact found'})
  }
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

router.post('/', async (req, res, next) => {
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
    const contact = await Contact.create({ ...newContact })
    res.json({
      status: 'SUCCESS',
      contact
    })
  } else {
    const company = await Company.create({
      name: req.body.companyName,
      userId: req.userId
    })
    const contact = await Contact.create({
      ...newContact,
      companyId: company.id
    })
    res.json({
      status: 'SUCCESS',
      contact,
      company
    })
  }
})

module.exports = router;
