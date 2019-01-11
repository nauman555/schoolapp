import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './students.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { StudentsComponent } from './st.component';
import { ManageSubjectsComponent } from './components/manage-subjects/manage-subjects.component';
import { AssignElectivesComponent } from './components/assign-electives/assign-electives.component';

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
        ManageSubjectsComponent,
        AssignElectivesComponent
    ]
})
export class SubjectsModule { }
