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
  tabtitle = 'Add New Section';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  disableButton = 0;

 // creating object of Service's  to call methods  => 'this is called dependency injection'
 constructor(
  private _classesDataService: ClassDataService, 
  private _teachersDataService: TeachersDataService,
  private _sectionDataService: SectionDataService

) { 

}

  ngOnInit() {

    $('.list-group-item').click(function(e) {
      e.preventDefault();
      $('.list-group-item').removeClass('active');
      $(this).addClass('active');
    });

    this.loadData();
  }
  loadData() {
  
  }
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