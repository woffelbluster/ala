import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { Laatste16Component } from './laatste16/laatste16.component';
import { MatchinfoComponent } from './matchinfo/matchinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    Laatste16Component,
    MatchinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
