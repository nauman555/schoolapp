import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admit-student',
  templateUrl: './admit-student.component.html',
  styleUrls: ['./admit-student.component.scss']
})
export class AdmitStudentComponent implements OnInit {
  tabtitle = 'Admit  Students';
  constructor() { }

  ngOnInit() {
    let defaultsession = '2018=2019'
  }


  onClickSubmit(data) {
    console.log(data)
 }


  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;

  //class
  public items: Array<any> = [{id: 1, text: 'Class 1'},
  {id: 2, text: 'Class 2'},
  {id: 3, text: 'Class 3'},
  {id: 4, text: 'Class 4 '}];

  
 public sectionsList: Array<string> ;


  public selected(value: any): void {
   
    if (value.id == 1){
      this.sectionsList = ['X','Y', 'Z'];
      console.log('heloo Selected value is: ', value);
    }
    else if(value.id == 2){
      this.sectionsList =['A', 'B' , 'C'];
      console.log('Selected value is: ', value);
    }else{
      this.sectionsList =['D','E','F'];
    }
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }

  // teacher

  public teachersList: Array<string> = ['Ali' , 'Akbar' , 'Saleem' , 'Teacher 1' , 'Max' , 'Ele' , 'Nick'];

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

  //section
  


  public selectedSection(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removedSection(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typedSection(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshSectionValue(value: any): void {
    this.value = value;
  }

  //parent list
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
