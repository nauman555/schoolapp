
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
// ******************** get teachers Name and ID only ******************************
//****************************************************************************** */

router.get('/get-teacherNameId',(req , res)=>{
    let sql = 'Select teacher_id AS id , teacher_name AS text  from tbl_teachers ';
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
// ***************************************** Class Management APIs ******************************************/
//******************************************************************************************************** */


//********************************************************************* */
// ************************ get class data ******************************
//********************************************************************* */

router.get('/get-classes',(req , res)=>{
    let sql = 'Select * from tbl_class WHERE status = 1 ';
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
// ******************** get Single Class data by ************************
//********************************************************************* */

router.get('/get-classById/:id',(req , res)=>{
    let sql = `Select * from tbl_class Where class_id = ${req.params.id} AND status=1  `;
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

router.get('/get-classByName/:c_name',(req , res)=>{
    let class_name = req.params.c_name;
    let sql = `Select COUNT(*) AS class_present from tbl_class Where class_name = '${class_name}' AND status = 1 `;
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
            res.json({data:result.insertId});
        }
    });

});

//********************************************************************* */
// ******************** Delete Class Data ******************************
//********************************************************************* */

router.put('/delete-class/:id',(req , res)=>{
    let class_id = req.params.id;
    let status = req.body.status;
    let sql = 'Update tbl_class SET status = ? Where class_id= ?';
    let query = con.query(sql,[ status , class_id ], (err, result)=>{
        if(err){
            res.json({msg: 'fail to Delete Class'+err});
        }else{
            res.json({msg: 'Deleted successfully'});
        }
    });

});


//********************************************************************* */
// ******************** Update Class Data ******************************
//********************************************************************* */

router.put('/update-class/:id' , (req ,res)=>{
    let class_id = req.params.id;
    let classUpdateDetails = {
        numeric_name:  req.body.numeric_name,
    };
    let sql = 'Update tbl_class SET ? where class_id= ?';
    let query = con.query(sql,[classUpdateDetails,class_id] , (err,result) =>{
        if(err){
            res.json({msg: 'Failed to update class data '+err});
        }else{
            res.json({ msg: 'Successfully Updated' ,
            status: result.message 
                       
        });
        }
    })

});


//********************************************************************************************************* */
// ***************************************** Section Management APIs ******************************************/
//******************************************************************************************************** */


//********************************************************************* */
// ******************** Add Section data ******************************
//********************************************************************* */


router.post('/add-section',(req , res)=>{

    let classDetails = {
        section_name:  req.body.section_name,
        class_name:    req.body.class_name,
        class_id:      req.body.class_id,
        teacher_id:    req.body.teacher_id,
        teacher_name:  req.body.teacher_name     
    };

    let sql = 'INSERT INTO tbl_section SET ?';
    let query = con.query(sql,classDetails , (err, result)=>{
        if(err){
            res.json({msg: 'fail to add section'+err});
        }else{
            res.json({msg: 'section added successfully'});
        }
    });

});


//********************************************************************* */
// ******************** Delete Section Data by class ID ******************************
//********************************************************************* */

router.put('/delete-sectionByClassId/:class_id',(req , res)=>{
    let class_id = req.params.class_id;
    let status = req.body.status;
    let sql = 'Update tbl_section SET status = ? Where class_id= ?';
    let query = con.query(sql,[ status , class_id ], (err, result)=>{
        if(err){
            res.json({msg: 'fail to Delete Section'+err});
        }else{
            res.json({msg: 'Deleted successfully'});
        }
    });

});


module.exports = router;
