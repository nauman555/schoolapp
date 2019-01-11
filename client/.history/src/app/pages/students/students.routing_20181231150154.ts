
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AdmitStudentComponent } from './components/admit-student/admit-student.component';
import { StudentInformationComponent } from './components/student-information/student-information.component';


const childRoutes: Routes = [
    {
        path: '',
        component: StudentsComponent,
        children: [
            { path: '', redirectTo: 'admit-student', pathMatch: 'full' },
            { path: 'admit-subject', component: AdmitStudentComponent },
            { path: 'students-info', component: StudentInformationComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);