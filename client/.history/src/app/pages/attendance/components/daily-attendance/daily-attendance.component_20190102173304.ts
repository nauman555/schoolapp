import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { StudentsInfoService } from './../../../students/components/';

@Component({
  selector: 'app-daily-attendance',
  templateUrl: './daily-attendance.component.html',
  styleUrls: ['./daily-attendance.component.scss'],
  providers: [StudentsInfoService]
})
export class DailyAttendanceComponent implements OnInit {
  private tabtitle = 'Daily Attendance';
  private pageSize = 10;
  private pageNumber = 1;
  private selectedClass: string;
  private selectedClsSection: string;
  public  atdSelectedDate :any;
  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = true;

  constructor() {
    
   }

  ngOnInit() {
  }

  onClickSubmit(data) {
    console.log(data)
 }

 public dateSelected(newValue) {
   this.atdSelectedDate = newValue;
 
  console.log(newValue)
}

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
  this.selectedClsSection='';

 }
 public refreshValue(value: any): void {
   
  this.value = value;
}

 //section
 


 public selectedSection(value: any): void {
   this.selectedClsSection = value.text;
   console.log('attendance for: ', this.selectedClass + this.selectedClsSection);
 }

 public removedSection(value: any): void {
   console.log('Removed value is: ', value);
 }
 public refreshSectionValue(value: any): void {
  this.value = value;
}

}
