import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private apiUrl = 'https://api.openweathermap.org/data/2.5/group?id=3191281,2759794,2643743,6455259,2761369&units=metric&appid=110ff02ed24ccd819801248373c3b208';

  constructor(private http: HttpClient) {
    console.log('Sad ce data ...getWeather');
    this.getWeather();
  }
  getWeather() {
  return this.http.get(this.apiUrl).pipe(
    map((resp: any) => resp)
  )
}
  }

