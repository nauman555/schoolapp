import { Component, OnInit } from '@angular/core';
import { ClassDataService } from './manageClass.service';
import {TeachersDataService} from './../../../teachers/teachers.service';  // import teachers data service to use teachers data 
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss'],
  providers: [ClassDataService , TeachersDataService]
})
export class ManageClassComponent implements OnInit {
  teachersList: Array<string> ;
  classData: Array<any>;
  tabtitle = 'Add Class';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(
    private _classesDataService: ClassDataService, 
    private _teachersDataService: TeachersDataService
  
  ) { }

  ngOnInit() {

    this.getTeachersData()
  }

    //*********************** Get all teachers data************************ */
    getTeachersData() {
      let teachersList = null;
      this._teachersDataService.getTeachersF()
        .subscribe(result =>{
          this.teachersList = result;
          this.teachersList =  this.teachersList[0];
          
        });            
    }


  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  onClickSubmit(data) {
    console.log(data)
 }
//ng2-select

 

  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;
  public selectedT(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removedT(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typedT(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshTValue(value: any): void {
    this.value = value;
  }
}
