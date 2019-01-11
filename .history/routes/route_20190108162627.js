
const express = require('express'); 
var mysql = require('mysql');
const router = express.Router();


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


// ******** default page ***********
router.get('/',(req , res)=>{

    res.send('Default Page');    
})


//********************************************************************************************************* */
// ******************** get teachers data ******************************
//********************************************************************* */


//********************************************************************* */
// ******************** get teachers data ******************************
//********************************************************************* */

router.get('/get-teachers',(req , res)=>{
    let sql = 'Select * from tbl_teachers ';
    let query = con.query(sql, (err, results)=>{
        if(err){
            res.json({msg: 'fail to add contact'+err});
        }
        else{
            res.json(results);
        }
    });   
});

//********************************************************************* */
// ******************** get Singal teacher data ******************************
//********************************************************************* */

router.get('/get-teacher/:id',(req , res)=>{
    let sql = `Select * from tbl_teachers Where teacher_id = ${req.params.id} `;
    let query = con.query(sql, (err, result)=>{
        if(err){
            res.json({msg: 'fail to add contact'+err});
        }
        else{
            res.json(result);
        }
    });   
});

//********************************************************************* */
// ******************** Add teachers data ******************************
//********************************************************************* */


router.post('/add-teacher',(req , res ,next)=>{

    let teacherDetails = {
        teacher_name:  req.body.teacher_name,
        teacher_qual:  req.body.teacher_qual,
        teacher_desig: req.body.teacher_desig,
        gender :       req.body.gender,
        dob :          req.body.dob,
        phone_num :    req.body.phone_num,
        email :        req.body.email,
        password :     req.body.password,
        address :      req.body.address,
        status: 1
    };

    let sql = 'INSERT INTO tbl_teachers SET ?';
    let query = con.query(sql,teacherDetails , (err, result)=>{
        if(err){
            res.json({msg: 'fail to add contact'+err});
        }else{
            res.json({msg: 'Teacher added successfully'});
        }
    });

});

//********************************************************************* */
// ******************** Update teachers data ******************************
//********************************************************************* */


router.put('/update-teacher/:id',(req , res ,next)=>{

    let teacher_id = parseInt(req.params.id);
    let teacherDetails = {
        teacher_name:  req.body.teacher_name,
        teacher_qual:  req.body.teacher_qual,
        teacher_desig: req.body.teacher_desig,
        gender :       req.body.gender,
        dob :          req.body.dob,
        phone_num :    req.body.phone_num,
        email :        req.body.email,
        password :     req.body.password,
        address :      req.body.address,
        status: 1
    };

    let sql = 'Update tbl_teachers SET ? Where teacher_id= ?';
    let query = con.query(sql,[teacherDetails , teacher_id ], (err, result)=>{
        if(err){
            res.json({msg: 'fail to add contact'+err});
        }else{
            res.json({msg: 'Updated successfully'});
        }
    });

});

//********************************************************************* */
// ******************** Delete Teachers Data ******************************
//********************************************************************* */

router.delete('/delete-teacher/:id',(req , res ,next)=>{

    let sql = `Delete from tbl_teachers where teacher_id = ${req.params.id}`;
    let query = con.query(sql , (err, result)=>{
        if(err){

            res.json({msg: 'fail to delete'+err});
        }else{
            res.json({msg: 'Deleted Successfully',
                    });
        }
    });

});


module.exports = router;
