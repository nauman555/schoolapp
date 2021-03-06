
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';

import { DailyAttendanceComponent } from './components/daily-attendance/daily-attendance.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';


const childRoutes: Routes = [
    {
        path: '',
        component: AttendanceComponent,
        children: [
            { path: '', redirectTo: 'daily-attendance', pathMatch: 'full' },
            { path: 'manage-class', component: DailyAttendanceComponent },
            { path: 'manage-section', component: AttendanceReportComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);