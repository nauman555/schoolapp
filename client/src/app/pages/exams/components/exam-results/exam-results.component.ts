import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { StudentsInfoService } from './../../../students/components/student-information/student-information.service';

@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.scss'],
  providers: [StudentsInfoService]
})
export class ExamResultsComponent implements OnInit {
  private tabtitle = 'Manage Marks';
  private pageSize = 10;
  private pageNumber = 1;
  private getSelectedExam: string;

  private selectedClass: string;

  public  value: any = {};



  public disableClassOpt: boolean = true;
  public buttonDisabled: boolean;
  public studentsInfo: Array<any>;
  public examList: Array<any> =['Final' , 'Mid Term'];
  public items: Array<any> = [{id: 1, text: 'Class 1'},
                {id: 2, text: 'Class 2'},
                {id: 3, text: 'Class 3'},
                {id: 4, text: 'Class 4 '}];

  constructor(private _StudentsInfoService: StudentsInfoService) { }

  ngOnInit() {
    this.buttonDisabled = true;
  }

  
 //************** select exam triger these functions  
public selectedExam(value: any): void {
  this.disableClassOpt = false;
  this.getSelectedExam = value.text;
  console.log('attendance for: ', this.getSelectedExam);
}

public removedExam(value: any): void {
  console.log('Removed value is: ', value);
  this.disableClassOpt = true;
  this.buttonDisabled =true;
}
public refreshExamValue(value: any): void {
 this.value = value;
}

 //*********** Select class trigger these functions 
 public selected(value: any): void {
  this.selectedClass = value.text;
  this.buttonDisabled = false;
     
 }

 public removed(value: any): void {

  this.buttonDisabled =true;

 }
 public refreshValue(value: any): void {
   
  this.value = value;
}

}
