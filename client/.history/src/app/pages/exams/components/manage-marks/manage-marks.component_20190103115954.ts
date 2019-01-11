import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { StudentsInfoService } from './../../../students/components/student-information/student-information.service';
@Component({
  selector: 'app-manage-marks',
  templateUrl: './manage-marks.component.html',
  styleUrls: ['./manage-marks.component.scss'],
  providers: [StudentsInfoService]
})
})
export class ManageMarksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
