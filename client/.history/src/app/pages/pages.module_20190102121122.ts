import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { AttendanceComponent } from './attendance/src/app/pages/attendance/attendance/attendance.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        AttendanceComponent,
       
  
    ]
})
export class PagesModule {
    test ="test varibale";
 }