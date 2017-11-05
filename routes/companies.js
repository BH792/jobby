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
      id: req.params.id
    }
  })
    .then(company => {
      if (company) {
        company.update({ ...updatedCompanyInfo })
        .then(updatedCompany => {
          res.json({
            type: 'SUCCESS',
            company: updatedCompany
          })
        })
      } else {
        res.json({type: 'ERROR', msg: 'no company found'})
      }
    })
})

router.post('/', function (req, res, next) {
  let newCompany = {
    name: req.body.name || null,
    website: req.body.website || null
  }

  Company.create({ ...newCompany })
    .then(company => {
      res.json({
        type: 'SUCCESS',
        company
      })
    })
})

module.exports = router;
