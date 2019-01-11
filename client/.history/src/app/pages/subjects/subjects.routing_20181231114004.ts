
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects.component';

import { ManageSubjectsComponent } from './components/manage-subjects/manage-subjects.component';
import { AssignElectivesComponent } from './components/assign-electives/assign-electives.component';

const childRoutes: Routes = [
    {
        path: '',
        component: SubjectsComponent,
        children: [
            { path: '', redirectTo: 'manage-subjects', pathMatch: 'full' },
            { path: 'manage-class', component: ManageSubjectsComponent },
            { path: 'assign-electives', component: AssignElectivesComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);