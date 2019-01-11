//******************************************************************************************** */
//*********** register html , css components and handle all the data submiting from frontend  */
// ******************************************************************************************* */

import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { TeachersDataService } from './teachers.service';  // service for calling Node API's

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  providers: [TeachersDataService]   // register service to use service data or call service functions
})
export class TeachersComponent implements OnInit {

  public teachersDataList: Array<any>;  //array to store teachers data fetching from DB
  public pageSize = 10;
  public pageNumber = 1;

  // creating object of TeachersDataService class to call methods  => 'this is called dependency injection'
  constructor(private _teachersDataService: TeachersDataService) { 


  }
  //********************* auto run the function on page load *******************//

  ngOnInit() {
    // call API to get teachers data when user load the app
    this.getTeachersData()
  }
 

  /********************************* pagination Info ****************************/

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }


  //*********************** Call API to get teachers data************************ */
  getTeachersData() {
    this._teachersDataService.getContactsF()
      .subscribe(result =>
                  this.teachersDataList = result);
  }
 

  // ******************* OnSubmit add teacher for handler function ******************/

  onSubmitAddTeacher(data){
    "teacher_id": 4,
    "teacher_name": "Api",
    "teacher_qual": "BA",
    "teacher_desig": "English Teacher",
    "gender": "Male",
    "dob": "11-11-18",
    "phone_num": "31285945200",
    "email": "one@email",
    "password": "kil",
    "added_date": "2019-01-07T07:43:16.000Z",
    "updated_date": "2019-01-07T07:43:16.000Z",
    "status": 1
      const newTeacherData = {
      teacher_name: data.teacher_name,
      teacher_qual: data.teacher_qual,
      teacher_desig: data.teacher_desig,
      gender:        data.gender,

      last_name: this.last_name,
      phone: this.phone
      };
    this._teachersDataService.addContact(newTeacherData)
    .subscribe(result => {
      this.teachersDataList.push(result);
      // load data from db after add
      this._teachersDataService.getContactsF()
      .subscribe(result =>
                  this.teachersDataList = result);
    });

  }

}
