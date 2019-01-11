
import { Routes, RouterModule } from '@angular/router';
import { SubjectsComponent } from './subjects.component';

import { ManageClassComponent } from './components/manage-class/manage-class.component';
import { ManageSectionComponent } from './components/manage-section/manage-section.component';

const childRoutes: Routes = [
    {
        path: '',
        component: SubjectsComponent,
        children: [
            { path: '', redirectTo: 'manage-subjects', pathMatch: 'full' },
            { path: 'manage-class', component: ManageClassComponent },
            { path: 'manage-section', component: ManageSectionComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);