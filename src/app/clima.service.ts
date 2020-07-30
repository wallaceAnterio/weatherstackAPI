import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) {  }

  getWeather(location) {
    let apiKey = '700553c8e32815632a07b9f5cf0f4bec';
    return this.http.get(
     `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`       
    );
  }
}
