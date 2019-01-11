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
    user: "node",
    password: "node",
    database: "school_webapp"

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
// app.use('/', route);

//creating route for testing server
app.get('/',(request , response)=>{

    response.send('Default Page');    
});

app.post('/add-teacher',(req , res ,next)=>{

    let teacherDetails = {
        teacher_name:'Nauman',
        teacher_qualification:'BA',
        teacher_designation:'English Teacher',
        gender : 'Male',
        dob : '11-11-18',
        phone_num : '31285945200',
        email : 'one@email',
        password :'kil',
        added_date: '',
        updated_date:'',
        status: 1};
    let sql = 'INSERT INTO tbl_teachers SET ?';
    let query = con.query(sql,teacherDetails , (err, result)=>{

    });
    //inserting into db
    newContact.save((err,contacts)=>{
        if(err){
            response.json({msg: 'fail to add contact'+err});
        }else{
            response.json({msg: 'contact added successfully'});
        }
    });

    

})




//bind port with server
app.listen(port,()=>{
    console.log('server started at port:' + port);
})

