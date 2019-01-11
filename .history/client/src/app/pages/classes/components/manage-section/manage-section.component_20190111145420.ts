import { TeachersDataService } from '../../../teachers/teachers.service';
import { ClassDataService } from './.././manage-class/manageClass.service';
import { Component, OnInit } from '@angular/core';
import { SectionDataService } from './manageSection.service';
import swal from 'sweetalert2';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';


// for using jquery
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.scss'],

  providers: [SectionDataService,ClassDataService , TeachersDataService]
})

export class ManageSectionComponent implements OnInit {
  classData: Array<any>;
  teachersData: Array<any>;
  isSectionPresentA: Array<any>;
  sectionData: Array<any>;
  singleSectionData: Array<any>;
  tabtitle = 'Add New Section';
  pageSize = 10;
  pageNumber = 1;
  disableButton = 0;
  sectionCheckAlert;
  successNotification = 0;
  updateButtonDisable = 1;
  private sec_id;
  private sec_name : string;
  private c_id;
  private c_name;
  private tech_id;
  private tech_name : string;
  private updateSuccessNotifi = 0;

 // creating object of Service's  to call methods  => 'this is called dependency injection'
 constructor(
  private _classesDataService: ClassDataService, 
  private _teachersDataService: TeachersDataService,
  private _sectionDataService: SectionDataService

) { 

}

//********************* auto run the function on page load *******************//
  ngOnInit() {
    // sidebar settings for select class
    $('.list-group-item').click(function(e) {
      e.preventDefault();
      $('.list-group-item').removeClass('active');
      $(this).addClass('active');
    });

    this.getClassData();  // call function to get class details for dropdown
    this. getTeachersData();   // call function to get teachers details for dropdown
  }

  //***************************************************************************************************************/
  /******************************************Read Data from DB Methods*********************************************/
  //***************************************************************************************************************/


  //********************************************************************** */
  //************ Get Section Data Against Selected Class ***************** */
  //********************************************************************* */

  getSectionByClassID(class_id){

    this._sectionDataService.getSectionF(class_id)
      .subscribe(result =>{
        this.sectionData = result;
      });
  }
  
  //********************************************************************** */
  //************ Get Single Section Data Against Selected Section  ******** */
  //********************************************************************* */

  getSingleSectionData(section_id , class_id){
    let singleSectionList = null;
    this._sectionDataService.getSingleSectionF(section_id,class_id)
      .subscribe(result =>{
        this.singleSectionData= result;
        singleSectionList = this.singleSectionData[0];
        this.sec_id   = singleSectionList.section_id;
        this.sec_name = singleSectionList.section_name;
        this.c_id = singleSectionList.class_id;
        this.c_name   = singleSectionList.class_name;
        this.tech_id     = singleSectionList.teacher_id;
        this.tech_name   = singleSectionList.teacher_name;
      });

  }

  //********************************************************************** */
  //*********************** Get Class Data ******************************* */
  //********************************************************************* */
    getClassData() {

      this._classesDataService.getClassesF()
        .subscribe(result =>{
          this.classData = result; 
          
        });            
    }

    //********************************************************************** */
  //*********************** Get Teachers Data ************************ */
    //********************************************************************* */

    getTeachersData() {
      this._teachersDataService.getTeachersF()
        .subscribe(result =>{
          this.teachersData = result;  
        });            
    }


  
  //***************************************************************************************************************/
  /**************************************Write , Update , Delate Data  Methods*************************************/
  //***************************************************************************************************************/

  
    //**************************************************************** */
  // ******************* Add new section event handler  ******************/
    //***************************************************************** */

    onSubmitAddSection(submitEvent) {
      let addSecdata = submitEvent.value;
      let class_id = addSecdata.class_id;
      
      const newSectionData = {
      class_id:  addSecdata.class_id,
      teacher_id:  addSecdata.teacher_id,
      section_name: addSecdata.section_name
      };
     
      this._sectionDataService.addSectionF(newSectionData)
        .subscribe(result => {
          //call function to reload sections details from DB
          this.getSectionByClassID(class_id);

        })
  
      this.successNotification = 1 ;  // show success notification
      this.FadeOutToaster();  // hide/show success fail alert
      submitEvent.reset();  // reset form after submission
  
    }

    


  //***************************************************************************** **/
  // ******************* check section already added event handler  ******************/
  //********************************************************** *******************/

  checkSectionAdded(class_id, section_name){
    
    this.sectionCheckAlert = 0;
    let isSectionPresent = 0;
    section_name = section_name.replace(/\s/g, ""); //replace spaces in name

    this._sectionDataService.sectionExistCheckF(class_id,section_name)
    .subscribe(result => {
      this.isSectionPresentA = result;
      isSectionPresent = this.isSectionPresentA[0].section_present;
      if(isSectionPresent){
        this.sectionCheckAlert = 1;
        this.disableButton = 0;
      }
      else{
        this.sectionCheckAlert = 0;
        this.disableButton = 1;
      }
      
    });
  }


   //*************************************************************** */
 // ******************* Update Section Data event handler  ******************/
   //*************************************************************** */

   onSubmitUpdateSection(submitEvent){
  let Updatedata = submitEvent.value;
  let clas_id =   +Updatedata.c_id;
  let section_id = +Updatedata.sec_id;
  let techr_id = Updatedata.teacher_id  // convert into int
  const updateSectionData = {
    teacher_id : techr_id
  };
  this._sectionDataService.updateSectionF(updateSectionData,clas_id,section_id)
  .subscribe(result => {
    // load data from db after update
   this.getSectionByClassID(clas_id);
  });

  // show success notification
  this.updateSuccessNotifi = 1;
  this.FadeOutUpdateToaster();


}



//*************************************************************** */
// *************** Delete Section event handler  *****************/
//*************************************************************** */

deleteSection(section_id,clas_id){

  const deleteStatus = {
    status: 0
  };
 
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

      const deleteStatus = {
        status: 0
      };
      // if user confirm then call delete API 
      this._classesDataService.deleteClassF(deleteStatus,class_id)  // delete class service calling
      .subscribe(data => {
      this._sectionDataService.delSectionByClassIdF(deleteStatus , class_id) // delete section against deleted class
      .subscribe(data=>{
      });
        this.getClassData(); // load data after delete
      });
      // show deleted notification
      swal(
        'Deleted!',
        'Class has been disabled.',
        'success'
      );
        // load teachers data after deleting data 
        
    }
  });
  
  
  }

 
  //************************************************************************************************************* */
  /*********************************************General   Methods************************************************ */
  //************************************************************************************************************* */
  
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }

 classRequired(data){
  this.disableButton = 1;
 }

   // hide success toaster after 2 secs
   FadeOutToaster() {
    setTimeout( () => {
          this.successNotification = 0;
        }, 2000);
   }

 //open model 
 openEditSectionModal(modal , section_id , class_id) {
  // call method to get single section data for updating
  this.getSingleSectionData(section_id , class_id);

modal.open();
}

 // close model
 closeModal(modal) {
  modal.close();
}

// active update button for section update

activeUpdatebtn(){
  this.updateButtonDisable = 0;
}

// hide update success alert after 2 secs
FadeOutUpdateToaster() {
  setTimeout( () => {
    this.updateSuccessNotifi = 0;
  }, 2000);
 }
}
