import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admit-student',
  templateUrl: './admit-student.component.html',
  styleUrls: ['./admit-student.component.scss']
})
export class AdmitStudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    console.log(data)
 }




}
