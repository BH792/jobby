const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const {
  touch: Touch,
  contact: Contact,
  user: User,
  job: Job
} = require('../models')

router.use(verifyJWT)

router.get('/', async (req, res) => {
  const touches = await Touch.findAll({
    include: [{
        model: Contact,
        attributes: [],
        include: [{
          model: User,
          attributes: [],
          where: {
            id: req.userId
          }
        }]
      }]
  })
  res.json(touches)
})

router.post('/', async (req, res) => {
  const newTouch = {
    jobId: req.body.jobId,
    contactId: req.body.contactId,
    date: req.body.date,
    type: req.body.type,
    subject: req.body.subject,
    notes: req.body.notes
  }
  let userJob;
  let userContact;
  if (newTouch.jobId) {
    [userJob, userContact] = await Promise.all([
      Job.findOne({
        where: {
          userId: req.userId,
          id: newTouch.jobId
        }
      }),
      Contact.findOne({
        where: {
          userId: req.userId,
          id: newTouch.contactId
        }
      })
    ])
  } else {
    userJob = true;
    userContact = await Contact.findOne({
      where: {
        userId: req.userId,
        id: newTouch.contactId
      }
    });
  }

  if (userJob && userContact) {
    const touch = await Touch.create(newTouch)
    res.json({
      status: 'SUCCESS',
      touch
    })
  } else {
    res.json({
      status: 'ERROR',
      msg: 'Job or Contact does not exist'
    })
  }
})

module.exports = router;
