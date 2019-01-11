import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './classes.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { ClassesComponent } from './subjects.component';
import { ManageClassComponent } from './components/manage-class/manage-class.component';
import { ManageSectionComponent } from './components/manage-section/manage-section.component';

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
    
        ClassesComponent,
        ManageClassComponent,
        ManageSectionComponent
    ]
})
export class ClassesModule { }
