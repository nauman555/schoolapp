import { Component, OnInit } from '@angular/core';
import { ExamsinfoService } from './add-exams.service';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-exams',
  templateUrl: './add-exams.component.html',
  styleUrls: ['./add-exams.component.scss']
})
export class AddExamsComponent implements OnInit {

  classData: Array<any>;
  tabtitle = 'Add Class';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _classesDataService: ExamsinfoService) { }

  ngOnInit() {
    this.loadData();
  }
  

}
