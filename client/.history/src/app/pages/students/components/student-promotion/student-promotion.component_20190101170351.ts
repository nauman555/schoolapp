import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-student-promotion',
  templateUrl: './student-promotion.component.html',
  styleUrls: ['./student-promotion.component.scss']
})
export class StudentPromotionComponent implements OnInit {
  tabtitle = 'Students Promotions';
  defaultsession = '2018 - 2019';
  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    console.log(data)
 }

}
