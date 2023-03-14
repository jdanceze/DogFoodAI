const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.static('public'))

const path = require("path");
const { get } = require('http');

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

//run
app.listen(8080)
module.exports = app;
