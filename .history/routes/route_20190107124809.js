
const express = require('express'); 
const router = express.Router();

//********************* get teachers data ***************************** 

router.get('/get-teacher',(req , res , next)=>{
    //retreiewing data from db and stroing in contacts variable 
    Contact.find(function(err, contacts){
        response.json(contacts);
    })
    
})


//********************* add teachers data ***************************

router.post('/add-teacher',(req , res ,next)=>{
    // creating newContact object 
    // let teacherDetails = new Contact({
    //     first_name: request.body.first_name,
    //     last_name: request.body.last_name,
    //     phone: request.body.phone

    // });
    
    let teacherDetails = {
        teacher_name:  request.body.teacher_name,
        teacher_qual:  request.body.teacher_qual,
        teacher_desig: request.body.teacher_designation,
        gender :       request.body.gender,
        dob :          request.body.dob,
        phone_num :    request.body.phone_num,
        email : email,
        password :password,
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
