import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { SubjectsDataService } from './manage-subjects.service';
// for using jquery
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss'],
  providers: [SubjectsDataService]
})
export class ManageSubjectsComponent implements OnInit {
  subjectsData: Array<any>;
  tabtitle = 'Manage Subjects';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _SubjectsDataService: SubjectsDataService) { }

  ngOnInit() {
    $('.list-group-item').click(function(e) {
      e.preventDefault();
      $('.list-group-item').removeClass('active');
      $(this).addClass('active');
    });

    this.loadData();
  }
  loadData() {
    this.subjectsData = this._SubjectsDataService.DATA;
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }


  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;

  //class
  public items: Array<string> = [{id:1 , text:'Class 1'}, 'Class 2', 'Class 3', 'Class 4',
  'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

  
 public sectionsList: Array<string> ;

  public selected(value: any): void {
   
    if (value.text === 'class 1'){
      this.sectionsList = ['X','Y', 'Z'];
      console.log('heloo Selected value is: ', value.text);
    }
    else if(value == 'class 1'){
      this.sectionsList =['A', 'B' , 'C'];
      console.log('Selected value is: ', value);
    }else{
      this.sectionsList =['D','E','F'];
    }
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  // teacher

  public teachersList: Array<string> = ['Ali' , 'Akbar' , 'Saleem' , 'Teacher 1' , 'Max' , 'Ele' , 'Nick'];

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

  //section
  


  public selectedSection(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removedSection(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typedSection(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshSectionValue(value: any): void {
    this.value = value;
  }

}
