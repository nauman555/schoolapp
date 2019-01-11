import { Component } from '@angular/core';
import { StudentsInfoService } from './students/components/student-information/student-information.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [StudentsInfoService]
})

export class PagesComponent { }
