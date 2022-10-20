const express = require('express');
const app = express();
app.use(express.static('public'))
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

//run
app.listen(8080)