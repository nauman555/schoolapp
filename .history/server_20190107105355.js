var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

// const route = require('./routes/route');

//connect to mysql db 
var con = mysql.createConnection({
    host: "localhost",
    user: "",
    password: ""
  });

// databse connection test
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//define port
const port =3000;

//adding middleware -cors
app.use(cors());

// body-parser
app.use(bodyparser.json());


//redirect all urls with /api/somthing  to routes/route.js
// app.use('/action', route);

//creating route for testing server
app.get('/',(request , response)=>{

    response.send('Default Page');    
})



//bind port with server
app.listen(port,()=>{
    console.log('server started at port:' + port);
})

