import { Component, OnInit } from '@angular/core';
import { ExamsinfoService } from './add-exams.service';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-exams',
  templateUrl: './add-exams.component.html',
  styleUrls: ['./add-exams.component.scss'],
  providers: [ExamsinfoService]
})
export class AddExamsComponent implements OnInit {

  examData: Array<any>;
  tabtitle = 'Add Exam';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _examsinfoService: ExamsinfoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.examData = this._examsinfoService.EXAM_INFO;
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
