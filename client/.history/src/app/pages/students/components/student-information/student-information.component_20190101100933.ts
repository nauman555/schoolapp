import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { StudentsInfoService } from './student-information.service';
// for using jquery
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.scss']
})
export class StudentInformationComponent implements OnInit {
  studentInfo: Array<any>;
  tabtitle = 'Add New Section';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;


  constructor(private _StudentsInfoService: StudentsInfoService) { }

  ngOnInit() {
    $('.list-group-item').click(function(e) {
      e.preventDefault();
      $('.list-group-item').removeClass('active');
      $(this).addClass('active');
    });

    this.loadData();
  }
  loadData() {
    this.classData = this._StudentsInfoService.DATA;
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }

}
