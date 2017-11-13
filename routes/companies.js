const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { job: Job, company: Company } = require('../models')

router.use(verifyJWT)

router.post('/:id', async (req, res, next) => {
  let updatedCompanyInfo = {
    name: req.body.name || null,
    website: req.body.website || null
  }

  const company = await Company.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })
  if (company) {
    const updatedCompany = await company.update({ ...updatedCompanyInfo })
    res.json({
      status: 'SUCCESS',
      company: updatedCompany
    })
  } else {
    res.json({status: 'ERROR', msg: 'no company found'})
  }
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

router.post('/', async (req, res, next) => {
  let newCompany = {
    name: req.body.name || null,
    website: req.body.website || null,
    userId: req.userId
  }
  const company = await Company.create({ ...newCompany })
  res.json({
    status: 'SUCCESS',
    company
  })
})

module.exports = router;
