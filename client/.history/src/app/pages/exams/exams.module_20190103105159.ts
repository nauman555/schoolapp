



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './exams.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { ExamsComponent } from './exams.component';
import { AddExamsComponent } from './components/add-exams/add-exams.component';
import { ManageMarksComponent } from './components/manage-marks/manage-marks.component';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';

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
    
        ExamsComponent,
        AddExamsComponent,
        ManageMarksComponent,
        
    ]
})
export class AttendanceModule { }
