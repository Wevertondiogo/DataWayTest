import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavModule } from './nav/nav.module';


const routes: Routes = [
  {path: "", loadChildren: ()=> import("./home/home.module").then(m=> m.HomeModule)},
  {path: "capitals", loadChildren: ()=> import("./capitals/capitals.module").then(m=> m.CapitalsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NavModule],
  exports: [RouterModule, NavModule]
})
export class AppRoutingModule { }
