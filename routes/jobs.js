const express = require('express');
const router = express.Router();
const { job: Job } = require('../models')

router.get('/', function(req, res, next) {
  Job.findAll().then(results => {res.json(results)})
});

module.exports = router;
