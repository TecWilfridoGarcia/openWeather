
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weatherservice.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogCity } from './open-dialog-city';
export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'City Weather';
  items: any[];

  constructor(private services: WeatherService, private http: HttpClient, public dialog: MatDialog) {
    console.log('Sad ce items ... getTest' + this.items);
    this.getTest();
  }


  getTest() {
    this.services.getWeather().subscribe(data => {
      console.log(data.list , 'component');
      this.items = data.list;
    })
  }

}
