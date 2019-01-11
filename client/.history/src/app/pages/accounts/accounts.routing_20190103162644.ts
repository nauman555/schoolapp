
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { DailyAttendanceComponent } from './components/daily-attendance/daily-attendance.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';


const childRoutes: Routes = [
    {
        path: '',
        component: AccountsComponent,
        children: [
            { path: '', redirectTo: 'daily-attendance', pathMatch: 'full' },
           
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);