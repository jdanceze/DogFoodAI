const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.static('public'))

const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");
const { get } = require('http');
const uri =
  process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = client.db("userDB");
const collection = db.collection("user");
const resultCollection = db.collection("testResult");
client.connect((err) => {
  if (err) console.error(err);
  else console.log("Connected successfully to server");
});

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

//run
app.listen(8080)