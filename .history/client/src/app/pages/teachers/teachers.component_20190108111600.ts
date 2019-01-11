//******************************************************************************************** */
//*********** register html , css components and handle all the data submiting from frontend  */
// ******************************************************************************************* */

import { Component, OnInit  } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import swal from 'sweetalert2';
import { TeachersDataService } from './teachers.service';  // service for calling Node API's

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  providers: [TeachersDataService]   // register service to use service data or call service functions
})
export class TeachersComponent implements OnInit {

  teachersDataList: Array<any>;  //array to store teachers data fetching from DB
  singleTeacherData: Array<any>; // array to store single teacher data 
  private pageSize = 10;
  private pageNumber = 1;
  private successNotification = 0;

  // creating object of TeachersDataService class to call methods  => 'this is called dependency injection'
  constructor(
    private _teachersDataService: TeachersDataService) { 

  }
  //********************* auto run the function on page load *******************//

  ngOnInit() {
    
    // call API to get teachers data when user load the app
    this.getTeachersData()
  }
 

  /********************************* pagination Info ****************************/

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }


  //*********************** Call API to get teachers data************************ */
  getTeachersData() {
    this._teachersDataService.getTeachersF()
      .subscribe(result =>
                  this.teachersDataList = result);
  }
 
  //********************** Get single teacher data ****************************** */
  getSignleTeacherData(id){
    this._teachersDataService.getSingleTeacherF(id)
      .subscribe(result=> this.singleTeacherData = result);
      console.log(this.singleTeacherData);
  }

  // ******************* OnSubmit add teacher for handler function ******************/

  onSubmitAddTeacher(submitEvent){
      let data = submitEvent.value;
      const newTeacherData = {
      teacher_name:  data.teacher_name,
      teacher_qual:  data.teacher_qual,
      teacher_desig: data.teacher_desig,
      password:      data.phone_num + '@' + data.teacher_name,
      gender:        data.gender,
      dob:           data.dob,
      phone_num:     data.phone_num,
      email:         data.email,
      address:       data.address
      };
 
    this._teachersDataService.addTeachersF(newTeacherData)
    .subscribe(result => {
      this.teachersDataList.push(result);
      // load data from db after add
      this._teachersDataService.getTeachersF()
      .subscribe(result =>
                  this.teachersDataList = result);
    });

    // show success notification
    this.successNotification = 1;
    this.FadeOutToaster();

    // reset for after submission
    submitEvent.reset(); 

  }


// ******************* OnClick delete teacher event handler function ******************/
  deleteTeacher(id){

  
    let teachersDataList = this.teachersDataList;

    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        // if user confirm then call delete API 
        this._teachersDataService.deleteTeachersF(id)
        .subscribe(data => {
        // if delete succesfully from db then we delete it from the array teachersDataList
        if ( data.status === 1 ) {
          console.log(teachersDataList);
          for (let i = 0; i < teachersDataList.length; i++) {
              if (teachersDataList[i].teacher_id === id ) {
                teachersDataList.splice(i, 1);
              }
          }
          console.log(teachersDataList);
        }
        });
        // show deleted notification
        swal(
          'Deleted!',
          'Teacher has been deleted.',
          'success'
        );
          // load teachers data after deleting data 
          this.getTeachersData();
      }
    });

  }



  // hide success toaster after 2 secs
  FadeOutToaster() {
    setTimeout( () => {
          this.successNotification = 0;
        }, 2000);
   }
   //open model 
   openEditTeachModal(modal , id) {
    modal.open();
    // call method to get singal teacher data for updating
    this.getSignleTeacherData(id)
  }
  // close model
  closeModal(modal) {
    modal.close();
  }
}
