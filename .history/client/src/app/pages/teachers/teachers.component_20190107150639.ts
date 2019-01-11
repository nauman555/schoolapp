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

  public teachersDataList: Array<any>;
  public  pageSize = 10;
  pageNumber = 1;
  constructor(private _teachersDataService: TeachersDataService) { 


  }
  //auto run the function on page load
  ngOnInit() {
    // call API to get teachers data when user load the app
    this.getTeachersData()
  }
 

  /* pagination Info */

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

    
  

  //***************************** Call API to get teachers data***************************** */
  getTeachersData() {
    this._teachersDataService.getContactsF()
      .subscribe(result =>
                  this.teachersDataList = result);
  }
 


}
