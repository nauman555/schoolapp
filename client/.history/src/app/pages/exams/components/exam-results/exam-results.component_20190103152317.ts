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



  public  disableClassOpt: boolean = true;
  buttonDisabled: boolean;
  studentsInfo: Array<any>;

  public items: Array<any> = [{id: 1, text: 'Class 1'},
                {id: 2, text: 'Class 2'},
                {id: 3, text: 'Class 3'},
                {id: 4, text: 'Class 4 '}];

  constructor() { }

  ngOnInit() {
  }

}
