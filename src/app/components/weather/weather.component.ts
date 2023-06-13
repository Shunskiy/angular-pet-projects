import {Component, OnInit} from '@angular/core';
import {IWeatherData, WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  loading = false;

  data: IWeatherData = {
    temperature: "...",
    wind: "...",
    description: "...",
    forecast: []
  };

  inputCopy: string = ""

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.inputCopy = this.weatherService.getWeatherCity()

    if (this.inputCopy) {
      this.getWeather()
    }
  }

  getWeather() {
    this.loading = true;
    this.weatherService.setWeatherCity(this.inputCopy)
    this.weatherService.getWeatherData(this.inputCopy).subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }
}
