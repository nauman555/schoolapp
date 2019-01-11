
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './teachers.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { ModalModule } from 'ngx-modal';

import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { TeachersComponent } from './teachers.component';
import { AdmitStudentComponent } from './components/admit-student/admit-student.component';
import { StudentInformationComponent } from './components/student-information/student-information.component';
import { StudentPromotionComponent } from './components/student-promotion/student-promotion.component';


@NgModule({
    imports: [
       
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxEchartsModule,
        SelectModule,
        ModalModule,
        routing
    ],
    declarations: [
    
        TeachersComponent,
        AdmitStudentComponent,
        StudentInformationComponent,
        StudentPromotionComponent
    ]
})
export class StudentsModule { }
