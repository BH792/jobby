const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { job: Job, company: Company } = require('../models')

router.use(verifyJWT)

router.post('/:id', async (req, res) => {
  let updatedJobInfo = {
    ...req.body,
  }

  const job = await Job.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })

  if (job) {
    let updatedJob;

    if (!updatedJobInfo.company) {
      const updatedJob = await job.update({ ...updatedJobInfo })
      res.json({
        status: 'SUCCESS',
        job: updatedJob
      })
    } else {
      const company = await Company.create({
        name: req.body.company,
        userId: req.userId
      })
      const updatedJob = await job.update({
        ...updatedJobInfo,
        companyId: company.id
      })
      res.json({
        status: 'SUCCESS',
        job: updatedJob,
        company
      })
    }
  } else {
    res.json({status: 'ERROR', msg: 'Job not found'})
  }
})

router.post('/', async (req, res, next) => {
  let newJob = {
    ...req.body,
    userId: req.userId
  }

  if (req.body.companyId) {
    const job = await Job.create({ ...newJob })
    res.json({
      status: 'SUCCESS',
      job
    })
  } else {
    const company = await Company.create({
      name: req.body.company,
      userId: req.userId
    })
    const job = await Job.create({
      ...newJob,
      companyId: company.id
    })

    res.json({
      status: 'SUCCESS',
      job,
      company
    })
  }
})

module.exports = router;
