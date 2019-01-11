import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-daily-attendance',
  templateUrl: './daily-attendance.component.html',
  styleUrls: ['./daily-attendance.component.scss']
})
export class DailyAttendanceComponent implements OnInit {
  tabtitle = 'Admit  Students';
  pageSize = 10;
  pageNumber = 1;
  selectedClass: string;
  selectedClsSection: string;
  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    console.log(data)
 }

 public value: any = {};
 public _disabledV: string = '0';
 public disabled: boolean = true;

 //class
 public items: Array<any> = [{id: 1, text: 'Class 1'},
 {id: 2, text: 'Class 2'},
 {id: 3, text: 'Class 3'},
 {id: 4, text: 'Class 4 '}];

 
public sectionsList: Array<string> ;


 public selected(value: any): void {
  this.selectedClass = value.id;
  this.disabled = this._disabledV === '1';

  
   if (value.id == 1){
     this.sectionsList = ['X','Y', 'Z'];
     console.log('heloo Selected value is: ', value);
   }
   else if(value.id == 2){
     this.sectionsList =['A', 'B' , 'C'];
     console.log('Selected value is: ', value);
   }else{
     this.sectionsList =['A'];
   }
 }

 public removed(value: any): void {
  this.disabled = this._disabledV === '0';

 }


 //section
 


 public selectedSection(value: any): void {
   this.selectedClsSection = value.test
   console.log('Selected value is: ', value);
 }

 public removedSection(value: any): void {
   console.log('Removed value is: ', value);
 }

}
