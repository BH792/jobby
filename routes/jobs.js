const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { job: Job, company: Company } = require('../models')

router.use(verifyJWT)

router.post('/:id', async (req, res) => {
  let updatedJobInfo = {
    title: req.body.title || null,
    description: req.body.description || null,
    status: req.body.status || 'watching',
    companyId: req.body.companyId,
  }

  const job = await Job.findOne({
    where: {
      id: req.params.id,
      userId: req.userId
    }
  })

  if (job) {
    let updatedJob;

    if (updatedJobInfo.companyId) {
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
// router.post('/:id', function (req, res, next) {
//   let updatedJobInfo = {
//     title: req.body.title || null,
//     description: req.body.description || null,
//     status: req.body.status || 'watching',
//     companyId: req.body.companyId,
//   }
//
//   Job.findOne({
//     where: {
//       id: req.params.id,
//       userId: req.userId
//     }
//   })
//     .then(job => {
//       if (job) {
//         if (updatedJobInfo.companyId) {
//           job.update({ ...updatedJobInfo })
//           .then(updatedJob => {
//             res.json({
//               status: 'SUCCESS',
//               job: updatedJob
//             })
//           })
//         } else {
//           Company.create({
//             name: req.body.company,
//             userId: req.userId
//           })
//             .then(company => {
//               job.update({
//                 ...updatedJobInfo,
//                 companyId: company.id
//               })
//                 .then(updatedJob => {
//                   res.json({
//                     status: 'SUCCESS',
//                     job: updatedJob,
//                     company
//                   })
//                 })
//             })
//         }
//       } else {
//         res.json({status: 'ERROR', msg: 'no job found'})
//       }
//     })
// })


router.post('/', async (req, res, next) => {
  let newJob = {
    title: req.body.title || null,
    description: req.body.description || null,
    status: req.body.status || 'watching',
    companyId: req.body.companyId,
    userId: req.userId
  }

  if (newJob.companyId) {
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
