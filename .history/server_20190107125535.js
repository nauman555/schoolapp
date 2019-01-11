var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

const route = require('routes/route');

//connect to mysql d
//define port
const port =3000;

//adding middleware -cors
app.use(cors());

// body-parser
app.use(bodyparser.json());


//redirect all urls with /api/somthing  to routes/route.js
app.use('/', route);

//bind port with server
app.listen(port,()=>{
    console.log('server started at port:' + port);
})

