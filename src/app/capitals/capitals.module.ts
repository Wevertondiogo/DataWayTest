import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalsComponent } from './capitals.component';

import { DxDataGridModule,DxButtonModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    CapitalsComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule
  ],
   exports: [CapitalsComponent]
})
export class CapitalsModule { }
