import { Component, OnInit } from '@angular/core';
import { ClassDataService } from './manageClass.service';
import {TeachersDataService} from './../../../teachers/teachers.service';  // import teachers data service to use teachers data 
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss'],
  providers: [ClassDataService , TeachersDataService]
})
export class ManageClassComponent implements OnInit {
  teachersList: Array<string> ;
  classData: Array<any>;
  tabtitle = 'Add Class';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  successNotification = 0;
  updateSuccessNotifi = 0;

// creating object of Service's  to call methods  => 'this is called dependency injection'
  constructor(
    private _classesDataService: ClassDataService, 
    private _teachersDataService: TeachersDataService
  
  ) { 

  }

  //********************* auto run the function on page load *******************//
  ngOnInit() {
// call API to get teachers and class data when user load the app
    this.getTeachersData();
    this.getClassData();
  }

//*********************************************************************************************************************** */
/**********************************************************Read Data from DB Methods************************************** */
//*********************************************************************************************************************** */

  //*********************** Get all teachers data ************************ */
  getTeachersData() {

    this._teachersDataService.getTeacherNameIdF()
      .subscribe(result =>{
        this.teachersList = result;       
      });            
  }

  //*********************** Get all Classes data ************************ */
  getClassData() {

    this._classesDataService.getClassesF()
      .subscribe(result =>{
        this.classData = result;       
      });            
  }
  
    //********************** Get single Class data ****************************** */
    getSingleClassData(id){
      let singleClass = null;
      this._classesDataService.getSingleClassByIdF(id)
        .subscribe(result=>  {
          // get the response data in array singleTeacherData
          this.singleTeacherData = result;
          singleTeacher = this.singleTeacherData[0];
          this.teacher_id    = singleTeacher.teacher_id; 
          this.teacher_name  = singleTeacher.teacher_name;
          this.teacher_qual  = singleTeacher.teacher_qual;
          this.teacher_desig = singleTeacher.teacher_desig;
          this.password      = singleTeacher.password;
          this.gender        = singleTeacher.gender;
          this.dob           = singleTeacher.dob;
          this.phone_num     = singleTeacher.phone_num;
          this.email         = singleTeacher.email;
          this.address       = singleTeacher.address;  
          
        });       
        
    }

//*********************************************************************************************************************** */
/*********************************************Write , Update , Delate Data  Methods************************************** */
//*********************************************************************************************************************** */


  // ******************* Add new class event handler  ******************/

  onSubmitAddClass(data) {

    const newClassData = {
    class_name:  data.class_name,
    numeric_name:  data.numeric_name,
    };

  this._classesDataService.addClassF(newClassData)
  .subscribe(result => {
    this.classData.push(result);
    // load data from db after add
    this.getClassData();
  });

  // show success notification
  this.successNotification = 1;
  this.FadeOutToaster();

  // reset for after submission
  data.reset(); 
  }

  



  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;
  public selectedT(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removedT(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typedT(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshTValue(value: any): void {
    this.value = value;
  }


   //*********************************************************************************************************************** */
  /*********************************************General   Methods************************************** */
   //*********************************************************************************************************************** */

  // hide success toaster after 2 secs
  FadeOutToaster() {
    setTimeout( () => {
          this.successNotification = 0;
        }, 2000);
   }

   FadeOutUpdateToaster() {
    setTimeout( () => {
      this.updateSuccessNotifi = 0;
    }, 2000);
   }
   //open model 
   openEditTeachModal(modal , id) {
      // call method to get singal teacher data for updating
    this.getSingleTeacherData(id);
    modal.open();
   
  }
  // close model
  closeModal(modal) {
    modal.close();
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
}