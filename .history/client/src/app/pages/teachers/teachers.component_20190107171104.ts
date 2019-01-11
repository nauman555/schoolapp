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

  private teachersDataList: Array<any>;  //array to store teachers data fetching from DB
  private pageSize = 10;
  private pageNumber = 1;

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
    console.log(data)

      const newTeacherData = {
      teacher_name:  data.teacher_name,
      teacher_qual:  data.teacher_qual,
      teacher_desig: data.teacher_desig,
      password
      gender:        data.gender,
      dob:           data.dob,
      phone_num:     data.phone_num,
      email:         data.email,
      password:      data.password,
      address:       data.address,
      status:        1
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
