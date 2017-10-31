const express = require('express');
const router = express.Router();
const { job: Job } = require('../models')

router.get('/', function(req, res, next) {
  Job.findAll({
    order: [['order', 'ASC']]
  }).then(results => {res.json(results)})
});

module.exports = router;
