import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CapitalsComponent } from '../capitals/capitals.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "capitals", component: CapitalsComponent},
  {path: "**", component: HomeComponent}

]

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [NavComponent]
})
export class NavModule { }
