const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.static('public'))

const path = require("path");
const { get } = require('http');

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

//run
app.listen(8080)
