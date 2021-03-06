import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { TeachersDataService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  providers: [TeachersDataService]
})
export class TeachersComponent implements OnInit {
  teachersInfo: Array<any>;
  tabtitle = 'Add Subjects';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _TeachersDataService: TeachersDataService) { }

  ngOnInit() {
    this.loadData()
  }
  loadData() {
    this.teachersInfo = this._TeachersDataService.teachers_info;
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }

}
