import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { TeachersDataService } from './teachers.service';

// for using jquery
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  providers: [TeachersDataService]
})
export class TeachersComponent implements OnInit {
  teachersInfo: Array<any>;

  constructor(private _TeachersDataService: TeachersDataService) { }

  ngOnInit() {
    this.loadData()
  }
  loadData() {
    this.teachersInfo = this._SubjectsDataService.DATA;
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }

}
