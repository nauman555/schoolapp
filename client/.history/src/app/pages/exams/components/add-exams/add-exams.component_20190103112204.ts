import { Component, OnInit } from '@angular/core';
import { ExamsinfoService } from './a.service';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-exams',
  templateUrl: './add-exams.component.html',
  styleUrls: ['./add-exams.component.scss']
})
export class AddExamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
