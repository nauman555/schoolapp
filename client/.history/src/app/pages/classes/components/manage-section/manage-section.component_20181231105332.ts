import { Component, OnInit } from '@angular/core';
import { SectionDataService } from './manageSection.service';
import {SelectModule} from 'ng2-select';

import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';

// for using jquery
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.scss'],

  providers: [SectionDataService]
})
export class ManageSectionComponent implements OnInit {
  classData: Array<any>;
  tabtitle = 'Add New Section';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  

  constructor(private _SectionDataService: SectionDataService) { }

  ngOnInit() {

    $('.list-group-item').click(function(e) {
      e.preventDefault();
      $('.list-group-item').removeClass('active');
      $(this).addClass('active');
    });

    this.loadData();
  }
  loadData() {
    this.classData = this._SectionDataService.DATA;
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  onClickSubmit(data) {
    console.log(data)
 }

 public items: Array<string> = ['Class 1', 'Class 2', 'Class 3', 'Class 4',
    'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
 public sectionList

  public value: any = {};
  public _disabledV: string = '0';
  public disabled: boolean = false;

  public selected(value: any): void {
    console.log('Selected value is: ', value);
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
}
