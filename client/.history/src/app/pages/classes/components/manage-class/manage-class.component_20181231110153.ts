import { Component, OnInit } from '@angular/core';
import { ClassDataService } from './manageClass.service';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss'],
  providers: [ClassDataService]
})
export class ManageClassComponent implements OnInit {
  classData: Array<any>;
  tabtitle = 'Add Class';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _classesDataService: ClassDataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.classData = this._classesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  onClickSubmit(data) {
    console.log(data)
 }
//n
 public teachersList: Array<string> = ['Ali' , 'Akbar' , 'Saleem' , 'Teacher 1' , 'Max' , 'Ele' , 'Nick']

  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;

}
