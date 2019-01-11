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
  private selectedClass: string;
  private selectedClsSection: string;
  public  atdSelectedDate :any;
  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = true;
  studentsInfo: Array<any>;

  constructor(private _StudentsInfoService: StudentsInfoService) { }

  ngOnInit() {
  }

}
