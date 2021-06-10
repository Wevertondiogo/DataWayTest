import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { DxSelectBoxModule, DxTextBoxModule, DxButtonModule, DxDataGridModule} from 'devextreme-angular';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxButtonModule,
    DxDataGridModule
  ],
  
  exports: [HomeComponent]
})
export class HomeModule { }
