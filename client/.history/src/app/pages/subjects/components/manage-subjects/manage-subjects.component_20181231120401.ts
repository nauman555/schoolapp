import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { SectionDataService } from './manageSection.service';
// for using jquery
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss'],
  providers: [SubjectsDataService]
})
export class ManageSubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
