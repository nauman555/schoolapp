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

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _teachersDataService: TeachersDataService) { }

  ngOnInit() {
    // call API to get teachers data when user load the app
    this.getTeachersData()
  }


  getTeachersData() {
    this.teachersInfo = this._TeachersDataService;
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }

}
