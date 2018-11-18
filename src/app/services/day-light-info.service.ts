import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DayLightInfo} from '../model/day-light-info';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {City} from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class DayLightInfoService {

  cities: City[] = [];

  constructor(private http: HttpClient) {
    this.cities.push({name: 'Apeldoorn', lat: 52.211159, lon: 5.969923});
    this.cities.push({name: 'Boracay', lat: 11.967375, lon: 121.924812});
    this.cities.push({name: 'Madrid', lat: 40.416775, lon: -3.703790});
    this.cities.push({name: 'Munchen', lat: 48.135124, lon: 11.581981});
    this.cities.push({name: 'Orlando', lat: 28.538336, lon: -81.379234});
    this.cities.push({name: 'Rotterdam', lat: 51.924419, lon: 4.477733});
  }

  getDayLightInfo(city: City, date: string): Observable<DayLightInfo> {
    const url = `https://api.sunrise-sunset.org/json?lat=${city.lat}&lng=${city.lon}&date=${date}&formatted=0`;
    return this.http.get<DayLightInfo>(url).pipe(
      map(data => {
        const result: DayLightInfo = data['results'];
        result.cityName = city.name;
        return result;
      })
    );
  }

  getCity(cityName: string): City  {
    const city = this.cities.find(item => item.name === cityName);
    return city;
}

  getCities(): City[] {
    return this.cities;
  }
}
