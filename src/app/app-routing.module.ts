import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Laatste16Component } from './laatste16/laatste16.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "laatste16",
    component: Laatste16Component,
    outlet: "laatste16"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
