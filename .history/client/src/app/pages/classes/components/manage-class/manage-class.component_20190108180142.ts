import { Component, OnInit } from '@angular/core';
import { ClassDataService } from './manageClass.service';
import {TeachersDataScheme} from './../../../teachers/teachersDataScheme';  // import teachers data service to use teachers data 
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss'],
  providers: [ClassDataService , TeachersDataScheme]
})
export class ManageClassComponent implements OnInit {
  classData: Array<any>;
  tabtitle = 'Add Class';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(
    private _classesDataService: ClassDataService, 
    private _teachersDataScheme: Tea
  
  ) { }

  ngOnInit() {
   
  }



  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  onClickSubmit(data) {
    console.log(data)
 }
//ng2-select

 public teachersList: Array<string> = ['Ali' , 'Akbar' , 'Saleem' , 'Teacher 1' , 'Max' , 'Ele' , 'Nick']

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
