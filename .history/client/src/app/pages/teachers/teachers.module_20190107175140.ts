
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './teachers.routing';
import { HttpModule } from '@angular/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { ModalModule } from 'ngx-modal';


import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { TeachersComponent } from './teachers.component';


@NgModule({
    imports: [
       
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgxEchartsModule,
        SelectModule,
        ModalModule,
        HttpModule,
        routing,
        ToastModule.forRoot()
    ],
    declarations: [
    
        TeachersComponent,
        
    ]
})
export class TeachersModule { }
