import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'teachers', loadChildren: './teachers/teachers.module#TeachersModule' },
            { path: 'classes', loadChildren: './classes/classes.module#ClassesModule' },
            { path: 'subjects', loadChildren: './subjects/subjects.module#SubjectsModule' },
            { path: 'students', loadChildren: './students/students.module#StudentsModule' },
            { path: 'attendance', loadChildren: './attendance/attendance.module#AttendanceModule' },
            { path: 'exams', loadChildren: './exams/exams.module#ExamsModule' },
            { path: 'accounts', loadChildren: './accounts/accounts.module#AccountssModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
