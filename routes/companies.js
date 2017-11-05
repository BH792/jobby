const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { job: Job, company: Company } = require('../models')

router.use(verifyJWT)

router.post('/:id', function (req, res, next) {
  let updatedCompanyInfo = {
    name: req.body.name || null,
    website: req.body.website || null
  }

  Company.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })
    .then(company => {
      if (company) {
        company.update({ ...updatedCompanyInfo })
        .then(updatedCompany => {
          res.json({
            status: 'SUCCESS',
            company: updatedCompany
          })
        })
      } else {
        res.json({status: 'ERROR', msg: 'no company found'})
      }
    })
})

router.get('/', function (req, res, next) {
  Company.findAll({
    where: {
      userId: req.userId
    }
  })
    .then(companies => {
      res.json({
        status: 'SUCCESS',
        companies
      })
    })
})

router.post('/', function (req, res, next) {
  let newCompany = {
    name: req.body.name || null,
    website: req.body.website || null,
    userId: req.userId
  }

  Company.create({ ...newCompany })
    .then(company => {
      res.json({
        status: 'SUCCESS',
        company
      })
    })
})

module.exports = router;
