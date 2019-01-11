import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { StudentsInfoService } from './../../../students/components/student-information/student-information.service';
@Component({
  selector: 'app-manage-marks',
  templateUrl: './manage-marks.component.html',
  styleUrls: ['./manage-marks.component.scss'],
  providers: [StudentsInfoService]

})
export class ManageMarksComponent implements OnInit {
  private tabtitle = 'Daily Attendance';
  private pageSize = 10;
  private pageNumber = 1;
  private getSelectedExam: string;
  private getSelectedSubject: string;
  private selectedClass: string;
  private selectedClsSection: string;
  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = true;
  public disableSectionOpt
  public disableClassOpt: boolean = true;
  buttonDisabled: boolean;
  studentsInfo: Array<any>;
  public sectionsList: Array<string> ;
  public items: Array<any> = [{id: 1, text: 'Class 1'},
                {id: 2, text: 'Class 2'},
                {id: 3, text: 'Class 3'},
                {id: 4, text: 'Class 4 '}];
  public examList: Array<any> =['Final' , 'Mid Term'];
  public subjectsList: Array<any> =['Math', 'Science' , 'Physics']

  constructor(private _StudentsInfoService: StudentsInfoService) { }

  ngOnInit() {
    this.buttonDisabled = true;
  }

  getStudentData(){
    this.studentsInfo = this._StudentsInfoService.DATA;
  }

  onClickSubmit(data) {
    console.log(data)
 }

 public fManageMarks(event){

  console.log(this.selectedClass)
 }

 //class
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

//exam 
public selectedExam(value: any): void {
  this.disableClassOpt = false;
  this.getSelectedExam = value.text;
  console.log('attendance for: ', this.getSelectedExam);
}

public removedExam(value: any): void {
  console.log('Removed value is: ', value);
}
public refreshExamValue(value: any): void {
 this.value = value;
}

//subject

public selectedSubject(value: any): void {
  this.buttonDisabled = false;
  this.getSelectedSubject = value.text;
  console.log('attendance for: ',  this.selectedClsSection);
}

public removedSubject(value: any): void {
  console.log('Removed value is: ', value);
}
public refreshSubjectValue(value: any): void {
 this.value = value;
}


}
