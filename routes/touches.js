const express  = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/JWTAuthentication')
const { touch: Touch, contact: Contact, user: User } = require('../models')

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

module.exports = router;
