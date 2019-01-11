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

  constructor() { }

  ngOnInit() {
  }

}
