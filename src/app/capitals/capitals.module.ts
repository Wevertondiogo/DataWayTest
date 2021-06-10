import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalsComponent } from './capitals.component';



@NgModule({
  declarations: [
    CapitalsComponent
  ],
  imports: [
    CommonModule
  ],
   exports: [CapitalsComponent]
})
export class CapitalsModule { }
