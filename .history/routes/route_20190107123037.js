
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
    //creating newContact object 
    let teacherDetails = new Contact({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone

    });
    // teacher_id, teacher_name, teacher_qualification, teacher_designation, gender, dob, phone_num, email, password, added_date, updated_date, status) 
    // VALUES (NULL, 'ali', 'BA', 'Teacher', 'Male', '20-11-1995', '031298585', 'ali@ali', '123456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1');
    let teacherDetails = {teacher_name, teacher_qualification, teacher_designation, gender, dob, phone_num, email, password, added_date, updated_date, status}
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
