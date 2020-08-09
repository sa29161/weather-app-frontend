import { Component } from '@angular/core';
import {WeatherService} from '../../services/WeatherService';

@Component({
  selector: 'app-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  constructor(private WeatherService: WeatherService) {
  } 

returnedWeather;
returnedForecast;
returnedDay;
datePipeString : string;

showWeather: boolean = false;
showForcast: boolean = false;


getWeather(city:string){
  console.log('city',city);
  this.WeatherService.getWeather(city)
  .subscribe(weather => {
  this.returnedWeather = weather;
  this.showWeather = true;
  this.showForcast = false;
  });}

getForecast(city:string){
    console.log('city',city);
    this.WeatherService.getForecast(city)
    .subscribe(forecast => {this.returnedForecast = forecast;
      this.showWeather = false;
      this.showForcast = true;
    });
  }



}
