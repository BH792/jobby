const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const {
  touch: Touch,
  contact: Contact,
  user: User,
  job: Job
} = require('../models')
const sequelize = require('sequelize')
const Op = sequelize.Op

router.use(verifyJWT)

router.post('/:id', async (req, res) => {
  const updatedTouchInfo = {
    date: req.body.date,
    type: req.body.type,
    subject: req.body.subject,
    notes: req.body.notes
  }

  const touch = await Touch.findOne({
    where: { id: {[Op.eq]: req.body.id} }
  })

  const updatedTouch = await touch.update(updatedTouchInfo)
  res.json({
    status: 'SUCCESS',
    touch: updatedTouch
  })
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
          userId: { [Op.eq]: req.userId },
          id: { [Op.eq]: newTouch.jobId }
        }
      }),
      Contact.findOne({
        where: {
          userId: { [Op.eq]: req.userId },
          id: { [Op.eq]: newTouch.contactId }
        }
      })
    ])
  } else {
    userJob = true;
    userContact = await Contact.findOne({
      where: {
        userId: { [Op.eq]: req.userId },
        id: { [Op.eq]: newTouch.contactId }
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
