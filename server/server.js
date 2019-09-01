const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
// require API_helper.js *Used for Dev Testing Purposes*
var unirest = require('unirest');
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

// API Call code will be here
/*
* Route to DEMO the API call to a REST API Endpoint 
* REST URL : https://jsonplaceholder.typicode.com/todos/1
*/
app.get('/getAPIResponse', (req, res) => {
    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%22metric%22+or+%22imperial%22&mode=xml%2C+html&q=Fontana%2CUS")
    .header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
    .header("X-RapidAPI-Key", "72a5887394msha757b0b81e042eap13f124jsnabbb5d744fa7")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
})

module.exports = app;