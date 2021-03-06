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
  tabtitle = 'Add New Section';
  pageSize = 10;
  pageNumber = 1;
  disableButton = 0;
  sectionCheckAlert;

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
  //*********************** Get Teachers Data ************************ */
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
      
      const newSectionData = {
      class_id:  data.class_id,
      teacher_id:  data.teacher_id,
      };
      
      // this._classesDataService.addClassF(newClassData)
      // .subscribe(result => {
      //   this.classLastInsertedId = result.data; // store id of last inserted class
      //   this.getClassData();  // load data from db after add
  
  
      //   //add teacher , sections against class, by-default Section A will be assigned to each created new class
      //   const newSectionData = {
      //     class_id: this.classLastInsertedId,
      //     class_name: data.c_name,
      //     teacher_id: this.teacher_id,
      //     teacher_name: this.teacher_name,
      //     section_name: 'A'
      //   }
      //   this._sectionDataService.addSectionF(newSectionData)
      //   .subscribe(result=>{
  
      //   })
      // });
  
      // this.successNotification = 1 ;  // show success notification
      // this.FadeOutToaster();  // hide/show success fail alert
      // submitEvent.reset();  // reset form after submission
  
    }


  //***************************************************************************** **/
  // ******************* check section already added event handler  ******************/
  //********************************************************** *******************/

  checkSectionAdded(class_id, section_name){
    
    this.sectionCheckAlert = 0;
    let isSectionPresent = 0;
    this._sectionDataService.sectionExistCheckF(class_id,section_name)
    .subscribe(result => {
      this.isSectionPresentA = result;
      isSectionPresent = this.isSectionPresentA[0].section_present;
      console.log(isSectionPresent);
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


}
