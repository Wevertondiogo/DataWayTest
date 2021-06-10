import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalsComponent } from './capitals.component';

import { DxDataGridModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    CapitalsComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
   exports: [CapitalsComponent]
})
export class CapitalsModule { }
