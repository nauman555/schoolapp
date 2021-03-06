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

 public items: Array<string> = ['Class 1', 'Class 2', 'Class 3', 'Class 4',
    'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];

 public teachersList: Array<string> = ['Ali' , 'Akbar' , 'Saleem' , 'Teacher 1' , 'Max' , 'Ele' , 'Nick']

 public sectionsList: Array<string> = 

  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;

  public selected(value: any): void {
    console.log('Selected value is: ', value);
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
}
