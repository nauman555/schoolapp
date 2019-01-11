import { TeachersDataService } from '../../../teachers/teachers.service';
import { ClassDataService } from './.././manage-class/manageClass.service';
import { Component, OnInit } from '@angular/core';
import { SectionDataService } from './manageSection.service';




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
  tabtitle = 'Add New Section';
  pageSize = 10;
  pageNumber = 1;
  disableButton = 0;
  sectionCheckAlert;
  successNotification = 0;

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
        console.log(this.sectionData);
      });
  }
  
  //********************************************************************** */
  //************ Get Single Section Data Against Selected Section  ******** */
  //********************************************************************* */

  getSingleSectionData(section_id , class_id){

  }

  //********************************************************************** */
  //*********************** Get Class Data ************************ */
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
      let data = submitEvent.value;
      let class_id = data.class_id;
      
      const newSectionData = {
      class_id:  data.class_id,
      teacher_id:  data.teacher_id,
      section_name: data.section_name
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
 openEditClassModal(modal , section_id , class_id) {
  // call method to get single section data for updating
this.getSingleSectionData(section_id , class_id);

modal.open();
}

 // close model
 closeModal(modal) {
  modal.close();
}
}
