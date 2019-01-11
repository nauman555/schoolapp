
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './accounts.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxPaginationModule } from 'ngx-pagination';
import {SelectModule} from 'ng2-select';
import { FormsModule, ReactiveFormsModule , FormGroup, FormControl, Validators} from '@angular/forms';
/* components */
import { AccountsComponent } from './accounts.component';
import { ManageFeeStructureComponent } from './components/manage-fee-structure/manage-fee-structure.component';
import { ManageFeeInvoiceComponent } from './components/manage-fee-invoice/manage-fee-invoice.component';



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
    
        AccountsComponent,
    
        ManageFeeStructureComponent,
    
        ManageFeeInvoiceComponent,
        
    ]
})
export class AccountsModule { }
