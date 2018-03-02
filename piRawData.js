const express = require('express'); 
const request = require('request');
const fs=require("fs");
const url = require("url");
 
const csvReader = require('./routes/csvReader');

var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );


function formatTimeOld (originalDate){
  return  (new Date(originalDate)).toISOString(); 
}

function formatTime (originalDate){
  var dateString = originalDate.replace(' ', 'T');
  dateString = dateString.replace('/', '-');
  dateString = dateString.replace('/', '-');
  return  dateString; 
}

console.log(formatTime("11/01/2015 00:33:51"));

var PORT = process.env.PORT || 3000;
  
var server = app.listen(PORT, function(){
  console.log('Example app listening on port ' + PORT);
});
