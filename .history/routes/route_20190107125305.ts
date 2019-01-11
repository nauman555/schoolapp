
const express = require('express'); 
const router = express.Router();


// ******** default page ***********
router.get('/',(req , res)=>{

    res.send('Default Page');    
})

//********************* get teachers data ***************************** 

router.get('/get-teacher',(req , res , next)=>{
    //retreiewing data from db and stroing in contacts variable 
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
    
})


//********************* add teachers data ***************************

router.post('/add-teacher',(req , res ,next)=>{

    let teacherDetails = {
        teacher_name:  req.body.teacher_name,
        teacher_qual:  req.body.teacher_qual,
        teacher_desig: req.body.teacher_designation,
        gender :       req.body.gender,
        dob :          req.body.dob,
        phone_num :    req.body.phone_num,
        email :        request.body.email,
        password :     request.body.password,
        status: 1};

    let sql = 'INSERT INTO tbl_teachers SET ?';
    let query = con.query(sql,teacherDetails , (err, result)=>{
        if(err){
            res.json({msg: 'fail to add contact'+err});
        }else{
            res.json({msg: 'contact added successfully'});
        }
    });

})

//************************** delete contact ***********************

router.delete('/contact/:id',(request , response ,next)=>{

    Contact.remove({_id:request.params.id}, function(err, result){
        if(err){
            response.json({msg: 'fail to delete'});
        }else{
            response.json({msg:'Delted successfully'});
        }
    });

})


module.exports = router;
