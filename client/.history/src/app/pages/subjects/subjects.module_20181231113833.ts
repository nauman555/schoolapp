import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './subjects.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { SubjectsComponent } from './subjects.component';
import { ManageClassComponent } from './components/manage-class/manage-class.component';
import { ManageSectionComponent } from './components/manage-section/manage-section.component';
import { ManageSubjectsComponent } from './components/src/app/pages/subjects/components/manage-subjects/manage-subjects.component';
import { AssignElectivesComponent } from './components/src/app/pages/subjects/components/assign-electives/assign-electives.component';

@NgModule({
    imports: [
       
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxEchartsModule,
        SelectModule,
        routing
    ],
    declarations: [
    
        SubjectsComponent,
        ManageClassComponent,
        ManageSectionComponent,
        ManageSubjectsComponent,
        AssignElectivesComponent
    ]
})
export class ClassesModule { }
