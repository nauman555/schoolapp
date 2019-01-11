
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
// ******************** Teachers Management APIs ******************************************************************/
//******************************************************************************************************** */


//********************************************************************* */
// ******************** get teachers data ******************************
//********************************************************************* */

router.get('/get-teachers',(req , res)=>{
    let sql = 'Select * from tbl_teachers ';
    let query = con.query(sql, (err, results)=>{
        if(err){
            res.json({msg: 'fail to add teacher'+err});
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
            res.json({msg: 'fail to get teacher data'+err});
        }
        else{
            res.json(result);
        }
    });   
});

//********************************************************************* */
// ******************** Add teachers data ******************************
//********************************************************************* */


router.post('/add-teacher',(req , res)=>{

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
            res.json({msg: 'fail to add teacher'+err});
        }else{
            res.json({msg: 'Teacher added successfully'});
        }
    });

});

//********************************************************************* */
// ******************** Update teachers data ******************************
//********************************************************************* */


router.put('/update-teacher/:id',(req , res )=>{

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
            res.json({msg: 'fail to update Teacher'+err});
        }else{
            res.json({msg: 'Updated successfully'});
        }
    });

});

//********************************************************************* */
// ******************** Delete Teachers Data ******************************
//********************************************************************* */

router.delete('/delete-teacher/:id',(req , res)=>{

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



//********************************************************************************************************* */
// ******************** Class Management APIs ******************************************************************/
//******************************************************************************************************** */


//********************************************************************* */
// ******************** get class data ******************************
//********************************************************************* */

router.get('/get-classes',(req , res)=>{
    let sql = 'Select * from tbl_class ';
    let query = con.query(sql, (err, results)=>{
        if(err){
            res.json({msg: 'fail to load class details'+err});
        }
        else{
            res.json(results);
        }
    });   
});


//********************************************************************* */
// ******************** get Single Class data ******************************
//********************************************************************* */

router.get('/get-class/:id',(req , res)=>{
    let sql = `Select * from tbl_class Where class_id = ${req.params.id}  `;
    let query = con.query(sql, (err, result)=>{
        if(err){
            res.json({msg: 'fail to get class data'+err});
        }
        else{
            res.json(result);
        }
    });   
});


//********************************************************************* */
// ******************** Check Class Already Added ******************************
//********************************************************************* */

router.get('/check-class/:c_name',(req , res)=>{
    let class_name = req.params.c_name;
    let sql = `Select COUNT(*) AS class_present from tbl_class Where class_name = '${class_name}'  `;
    let query = con.query(sql, (err, result)=>{
        if(err){
            res.json({msg: 'fail to get class data'+err});
        }
        else{
            res.json(result);
        }
    });   
});


//********************************************************************* */
// ******************** Add Class data ******************************
//********************************************************************* */


router.post('/add-class',(req , res)=>{

    let classDetails = {
        class_name:    req.body.class_name,
        numeric_name:  req.body.numeric_name     
    };

    let sql = 'INSERT INTO tbl_class SET ?';
    let query = con.query(sql,classDetails , (err, result)=>{
        if(err){
            res.json({msg: 'fail to add class'+err});
        }else{
            res.json({msg: 'Class added successfully'});
        }
    });

});

//********************************************************************* */
// ******************** Delete Class Data ******************************
//********************************************************************* */

router.put('/delete-teacher/:id',(req , res)=>{

    let sql = 'Update tbl_teachers SET ? Where teacher_id= ?';
    let query = con.query(sql,[teacherDetails , teacher_id ], (err, result)=>{
        if(err){
            res.json({msg: 'fail to update Teacher'+err});
        }else{
            res.json({msg: 'Updated successfully'});
        }
    }

});


module.exports = router;
