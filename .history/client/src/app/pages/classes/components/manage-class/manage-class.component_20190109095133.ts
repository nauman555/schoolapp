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
  teachersData= null;
  classData: Array<any>;
  tabtitle = 'Add Class';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  public items: Array<any> = [{id: 1, text: 'Class 1'},
  {id: 2, text: 'Class 2'},
  {id: 3, text: 'Class 3'},
  {id: 4, text: 'Class 4 '}];

  constructor(
    private _classesDataService: ClassDataService, 
    private _teachersDataService: TeachersDataService
  
  ) { }

  ngOnInit() {

    this.getTeachersData()
  }

    //*********************** Get all teachers data************************ */
    getTeachersData() {
 
      this._teachersDataService.getTeachersF()
        .subscribe(result =>{
          this.teachersList = result;
          this.teachersData=  this.teachersList[0];
          console.log(this.teachersList);
          console.log*
         
          
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
