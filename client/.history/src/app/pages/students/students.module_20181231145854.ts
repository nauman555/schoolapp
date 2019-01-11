import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './students.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { StudentsComponent } from './students.component';
import { AdmitStudentComponent } from './students/components/admit-student/admit-student.component';
import { StudentInformationComponent } from './students/components/src/app/pages/students/components/student-information/student-information.component';


@NgModule({
    imports: [
       
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxEchartsModule,
        SelectModule,
        routing
    ],
    declarations: [
    
        StudentsComponent,
        AdmitStudentComponent,
        StudentInformationComponent
    ]
})
export class SubjectsModule { }
