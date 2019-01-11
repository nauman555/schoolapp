import { ExamsComponent } from './src/app/pages/exams/exams.component';
import { AddExamsComponent } from './exams/components/src/app/pages/exams/components/add-exams/add-exams.component';
import { ManageMarksComponent } from './exams/components/src/app/pages/exams/components/manage-marks/manage-marks.component';
import { ExamResultsComponent }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './exams.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { AttendanceComponent } from './attendance.component';

import { DailyAttendanceComponent } from './components/daily-attendance/daily-attendance.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';

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
    
        AttendanceComponent,
        DailyAttendanceComponent,
        AttendanceReportComponent
    ]
})
export class AttendanceModule { }
