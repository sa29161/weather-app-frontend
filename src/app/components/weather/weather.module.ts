import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { LoginComponent } from 'src/app/login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    WeatherComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[WeatherComponent],
    
  providers: [DatePipe],
  bootstrap: [WeatherComponent]
})
export class AppModule { }

