import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})
export class AppModule { }

