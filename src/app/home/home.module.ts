import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { DxSelectBoxModule, DxTextBoxModule, DxButtonModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxButtonModule,
  ],
  
  exports: [HomeComponent]
})
export class HomeModule { }
