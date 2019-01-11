
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';


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