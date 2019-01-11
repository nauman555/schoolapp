import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-daily-attendance',
  templateUrl: './daily-attendance.component.html',
  styleUrls: ['./daily-attendance.component.scss']
})
export class DailyAttendanceComponent implements OnInit {
  tabtitle = 'Admit  Students';
  constructor() { }

  ngOnInit() {
  }
  
  onClickSubmit(data) {
    console.log(data)
 }
}
