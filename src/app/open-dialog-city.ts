
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './weatherservice.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog-city.html',
})
export class DialogCity {
  title = 'City Weather';
  items: any[];

  constructor(private services: WeatherService, private http: HttpClient, public dialog: MatDialog) {
    console.log('Sad ce items ... getTest' + this.items);
    this.getTest(this.items);
  }


  getTest(items) {
    this.services.getWeather().subscribe(data => {
      console.log(data.list , 'component');
      this.items = data.list;
      return this.items;
    })
  }
}
