
import { Routes, RouterModule } from '@angular/router';
import { ExamsComponent } from './exams.component';
import { AddExamsComponent } from './components/add-exams/add-exams.component';
import { ManageMarksComponent } from './components/manage-marks/manage-marks.component';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';


const childRoutes: Routes = [
    {
        path: '',
        component: ExamsComponent,
        children: [
            { path: '', redirectTo: 'daily-attendance', pathMatch: 'full' },
            { path: 'daily-attendance', component: DailyAttendanceComponent },
            { path: 'attendance-report', component: AttendanceReportComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);