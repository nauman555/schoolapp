import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { StudentsInfoService } from './student-information.service';
// for using jquery
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.scss'],
  providers: [StudentsInfoService]
})
export class StudentInformationComponent implements OnInit {
  studentsInfo: Array<any>;
  exam_marks: Array<any>;
  fee_invoice
 
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  avatarImgSrc: string = 'assets/images/avatar.png';
  userName: string = 'Folisise Chosielie';
  userPost: string = 'Musician, Player';
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
    this.studentsInfo = this._StudentsInfoService.DATA;
    this.exam_marks = this._StudentsInfoService.MARKS;
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }
 openModal(modal) {
  modal.open();
}

closeModal(modal) {
  modal.close();
}
}
