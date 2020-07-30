import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) {  }

  getWeather(location) {
    let apiKey = '4edec16d691990d101f6f221408f76b1';
    return this.http.get(
     `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`       
    );
  }
}
