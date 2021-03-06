import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm ,FormControl, Validators} from '@angular/forms';
import { SubjectsDataService } from './manage-subjects.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  providers: [TeachersDataService]
})
export class TeachersComponent implements OnInit {

  constructor(private _TeachersDataService: TeachersDataService) { }

  ngOnInit() {
  }

}
