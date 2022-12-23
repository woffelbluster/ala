import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Laatste16Component } from './laatste16/laatste16.component';
import { MatchinfoComponent } from "./matchinfo/matchinfo.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'laatste16/:id',
    component: Laatste16Component,
    
    
  },
  {
    path: 'laatste16/:id/matchinfo/:id',
    component: MatchinfoComponent,
    
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
