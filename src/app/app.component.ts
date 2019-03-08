 // import { Component } from '@angular/core';
// import { WeatherService } from './weatherservice.service';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   title = 'apiopenweather';
//   data: any = {};

//   constructor(private serviceWeather : WeatherService ){}
//    getData = this.serviceWeather.getWeather;

//   getTest() {
//     this.getData().subscribe(data => {
//       console.log(data + 'api');
//       this.data = data;
//     })
//   }

// }

import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherService } from './weatherservice.service';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'City Weather';
  items: any[];

  constructor(private services: WeatherService, private http: HttpClient) {
    console.log('Sad ce items ... getTest' + this.items);
    this.getTest();
  }


  getTest() {
    this.services.getWeather().subscribe(data => {
      console.log(data.list);
      this.items = data.list;
    })
  }
}


