import { Component, OnInit } from '@angular/core';
import { ClassDataService } from './manageClass.service';
import { SectionDataService } from './../manage-section/manageSection.service';
import {TeachersDataService} from './../../../teachers/teachers.service';  // import teachers data service to use teachers data 
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss'],
  providers: [ClassDataService , TeachersDataService , SectionDataService]
})
export class ManageClassComponent implements OnInit {
  teachersList: Array<string> ;
  classData: Array<any>;
  singleClassData: Array<any>;
  isClassPresentA: Array<any>;
  tabtitle = 'Add Class';
  pageSize = 10;
  pageNumber = 1;
  successNotification = 0;
  updateSuccessNotifi = 0;
  classCheckAlert = 0;
  classLastInsertedId ;
  private class_name : string =null;
  private numeric_name: string = null;
  private class_id;
  private teacher_id;
  private teacher_name;

// creating object of Service's  to call methods  => 'this is called dependency injection'
  constructor(
    private _classesDataService: ClassDataService, 
    private _teachersDataService: TeachersDataService,
    private _sectionDataService: SectionDataService
  
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
          this.singleClassData = result;
          singleClass = this.singleClassData[0];
          this.class_id    = singleClass.class_id; 
          this.class_name  = singleClass.class_id;
          this.numeric_name  = singleClass.numeric_name;  
        });       
        
    }

//*********************************************************************************************************************** */
/*********************************************Write , Update , Delate Data  Methods************************************** */
//*********************************************************************************************************************** */


  // ******************* Add new class event handler  ******************/

  onSubmitAddClass(submitEvent) {
    let data = submitEvent.value;

    const newClassData = {
    class_name:  data.c_name,
    numeric_name:  data.numericC_name,
    };
    
  this._classesDataService.addClassF(newClassData)
  .subscribe(result => {
    this.classLastInsertedId = result.data; // store id of last inserted class
    this.getClassData();  // load data from db after add

    const newSectionData = {
      class_id: this.classLastInsertedId,
      class_name: data.class_name,
      teacher_id: this.teacher_id,
      teacher_name: this.teacher_name,
      section_name: 'A'
    }
    console.log(newSectionData);
  });

  this.successNotification = 1;  // show success notification
  this.FadeOutToaster();  // hide/show success fail alert
  submitEvent.reset();  // reset form after submission

  }

  // ******************* check class already added event handler  ******************/

  checkClassAdded(c_name){
    let isClassPresent = 0;
    this._classesDataService.classExistCheckF(c_name)
    .subscribe(result => {
      this.isClassPresentA = result;
      isClassPresent = this.isClassPresentA[0].class_present;
      if(isClassPresent){
        this.classCheckAlert = 1;
      }
      else{
        this.classCheckAlert = 0;
      }
      
    });
  }



  selectedTeacher(value: any): void {
    this.teacher_id = value.id;
    this.teacher_name= value.text;
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
    this.getSingleClassData(id);
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
