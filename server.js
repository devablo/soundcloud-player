const express = require('express')
const app = express()
const debug = require('./src/controllers/debug')
const music = require('./src/controllers/music')
const path = require('path');

// Constants
const PORT = process.env.PORT || 5000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.use('/debug', debug)
app.use('/music', music)

app.listen(PORT, () => console.log(`listening on port !${PORT}`))
