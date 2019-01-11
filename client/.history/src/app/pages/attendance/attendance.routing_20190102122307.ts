
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance.component';

import { DailyAttendanceComponent } from './components/daily-attendance/daily-attendance.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';


const childRoutes: Routes = [
    {
        path: '',
        component: AttendanceComponent,
        children: [
            { path: '', redirectTo: 'manage-class', pathMatch: 'full' },
            { path: 'manage-class', component: ManageClassComponent },
            { path: 'manage-section', component: ManageSectionComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);