
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { ManageFeeStructureComponent } from './components/manage-fee-structure/manage-fee-structure.component';
import { ManageFeeInvoiceComponent } from './components/manage-fee-invoice/manage-fee-invoice.component';


const childRoutes: Routes = [
    {
        path: '',
        component: AccountsComponent,
        children: [
            { path: '', redirectTo: 'daily-attendance', pathMatch: 'full' },
            { path: 'daily-attendance', component: DailyAttendanceComponent },
            { path: 'attendance-report', component: AttendanceReportComponent },
           
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);