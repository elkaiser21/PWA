import {Component, ViewChild} from '@angular/core';
import {DayLightInfo} from './model/day-light-info';
import {DayLightInfoService} from './services/day-light-info.service';
import {City} from './model/city';
import {FormControl} from '@angular/forms';
import {MatTable} from '@angular/material';
import Utils from './util/Utils';

export interface ZonInfo {
  cityName: string;
  zonOpOnder: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day-light-info';
  cities: City[];
  selectedCity: City;
  date = new FormControl(new Date());
  minutesOffset = -60;
  dayLightInfo: DayLightInfo[] = [];
  displayedColumns: string[] = ['cityName', 'day_length'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private dayLightInfoService: DayLightInfoService) {
    this.cities = dayLightInfoService.getCities();
    this.selectedCity = dayLightInfoService.getCity('Apeldoorn');
  }

  getDayLightInfo(city: City) {
    const dateString = '' + this.date.value.getFullYear() + '-' +
      Utils.padLeft('' + (this.date.value.getMonth() + 1), '0', 2) + '-' +
      Utils.padLeft('' + this.date.value.getDate(), '0', 2);
    this.minutesOffset = (new Date(dateString)).getTimezoneOffset();
    this.dayLightInfoService.getDayLightInfo(city, dateString)
      .subscribe(result => {
        this.dayLightInfo.push(Object.assign({}, result));
        if (this.table) {
          this.table.renderRows();
        }
      });
  }

  deleteDayLightInfo() {
    this.dayLightInfo = [];
  }
}
