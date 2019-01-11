
var mysql = require('mysql');

//********************************************************************************************************* */
// ********************************** Teachers Management Functions *********************************************/
//******************************************************************************************************** */


//********************************************************************* */
// ******************** get teachers data Function *******************************/
//********************************************************************* */
module.exports = {
    get_teachersFun: function(a,b) {
        let sql = 'Select * from tbl_teachers ';
        let query = con.query(sql, (err, results)=>{
            if(err){
                return res.json({msg: 'fail to add teacher'+err});
            }
            else{
                return res.json(results);
            }
        }); 
    },
    multiply: function(a,b) {
        return a*b
    }
};