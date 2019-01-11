
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
            { path: 'daily-attendance', component: DailyAttendanceComponent },
            { path: 'attendance-report', component: AttendanceReportComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);