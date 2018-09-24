const express = require('express')
const app = express()
const debug = require('./controllers/debug')
const music = require('./controllers/music')
const path = require('path');

// Constants
const PORT = process.env.PORT || 4000;

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/debug', debug)
app.use('/music', music)

app.listen(PORT, () => console.log(`listening on port !${PORT}`))
