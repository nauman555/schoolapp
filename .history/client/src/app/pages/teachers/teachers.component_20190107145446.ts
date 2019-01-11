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

  let teachersDataList:

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _teachersDataService: TeachersDataService) { }

  ngOnInit() {
    // call API to get teachers data when user load the app
    this.getTeachersData()
  }

  //***************************** Call API to get teachers data***************************** */
  getTeachersData() {
    this._teachersDataService.getContactsF()
      .subscribe(result =>
                  this.contactsList = result);
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }

}
