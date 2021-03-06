
const express = require('express'); 
const router = express.Router();

//********************* get data ***************************** 

router.get('/add',(request , response , next)=>{
    //retreiewing data from db and stroing in contacts variable 
    Contact.find(function(err, contacts){
        response.json(contacts);
    })
    
})


//********************* add contact ***************************

router.post('/contacts',(request , response ,next)=>{
    //creating newContact object 
    let newContact = new Contact({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        phone: request.body.phone

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
