
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';


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