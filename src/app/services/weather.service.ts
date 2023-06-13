import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

export interface IWeatherData {
  temperature: string;
  wind: string;
  description: string;
  forecast: IForecast[];
}

export interface IForecast {
  day: string;
  temperature: string;
  wind: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeatherData(city: string) {
    let newCity = city.toLowerCase().replace(" ", "");
    return this.http.get<IWeatherData>(`https://goweather.herokuapp.com/weather/${newCity}`);
  }

  setWeatherCity(city: string) {
    localStorage.setItem("weather-city", city)
  }

  getWeatherCity() {
    return localStorage.getItem("weather-city") || ""
  }
}
