var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

// const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/schoolwebapp');

// on connection 
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongodb ');
});

//on error
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('connection fail '+ err);
    }
});
    

//define port
const port =3000;

//adding middleware -cors
app.use(cors());

// body-parser
app.use(bodyparser.json());

// static files
var options = {
    index: "public/default.html"
  };
  
  app.use('/', express.static('app', options));

//redirect all urls with /api/somthing  to routes/route.js
// app.use('/api', route);

//creating route for testing server
// app.get('/',(request , response)=>{

//     response.send('request');    
// })



//bind port with server
app.listen(port,()=>{
    console.log('server started at port:' + port);
})

