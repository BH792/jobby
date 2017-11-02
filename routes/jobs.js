const express = require('express');
const router = express.Router();
const { job: Job, company: Company } = require('../models')

router.get('/', function(req, res, next) {
  Job.findAll({
    order: [['order', 'ASC']],
    include: [
      {
        model: Company
      }
    ]
  }).then(results => {res.json(results)})
});

module.exports = router;
