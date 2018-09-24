const express = require('express')
const router = express.Router()
const soundCloudService = require('./../../services/soundcloud')

// define the home page route
router.get('/', function (req, res) {
  let data = soundCloudService.Query('tiesto')
  .then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data))
  });
})

module.exports = router