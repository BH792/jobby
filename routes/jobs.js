const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { job: Job, company: Company } = require('../models')

router.use(verifyJWT)

router.post('/:id', function (req, res, next) {
  let updatedJobInfo = {
    title: req.body.title || null,
    description: req.body.description || null,
    status: req.body.status || 'watching',
    companyId: req.body.companyId,
  }

  Job.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })
    .then(job => {
      if (job) {
        if (updatedJobInfo.companyId) {
          job.update({ ...updatedJobInfo })
          .then(updatedJob => {
            res.json({
              status: 'SUCCESS',
              job: updatedJob
            })
          })
        } else {
          Company.create({
            name: req.body.companyName,
            userId: req.userId
          })
            .then(company => {
              job.update({
                ...updatedJobInfo,
                companyId: company.id
              })
                .then(updatedJob => {
                  res.json({
                    status: 'SUCCESS',
                    job: updatedJob,
                    company
                  })
                })
            })
        }
      } else {
        res.json({status: 'ERROR', msg: 'no job found'})
      }
    })
})

router.get('/', function (req, res, next) {
  Job.findAll({
    where: {
      userId: req.userId
    },
    // order: [['order', 'ASC']],
    include: [
      {
        model: Company
      }
    ]
  }).then(results => {res.json(results)})
});

router.post('/', function (req, res, next) {
  let newJob = {
    title: req.body.title || null,
    description: req.body.description || null,
    status: req.body.status || 'watching',
    companyId: req.body.companyId,
    userId: req.userId
  }

  if (newJob.companyId) {
    Job.create({ ...newJob })
    .then(job => {
      res.json({
        status: 'SUCCESS',
        job
      })
    })
  } else {
    Company.create({
      name: req.body.companyName,
      userId: req.userId
    })
      .then(company => {
        Job.create({
          ...newJob,
          companyId: company.id
        })
          .then(job => {
            res.json({
              status: 'SUCCESS',
              job,
              company
            })
          })
      })
  }
})

module.exports = router;
