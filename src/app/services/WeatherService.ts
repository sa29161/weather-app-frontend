  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {WeatherModel} from '../model/WeatherModel';
import { ForecastModel } from '../model/ForecastModel';



@Injectable({ providedIn: 'root' })
export class WeatherService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherModel[]> {
    return this.http.get<WeatherModel[]>('http://localhost:8080/settings/weather?city='+city);
  }

  getForecast(city: string): Observable<ForecastModel[]> {
    return this.http.get<ForecastModel[]>('http://localhost:8080/settings/forecast?city='+city);
  }
  

}
