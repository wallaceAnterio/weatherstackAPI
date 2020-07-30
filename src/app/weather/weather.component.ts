import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClimaService } from './../clima.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  public pesquisaClimaRegiao: FormGroup;
  public weatherData: any;  
  public icone: string;
  public visivel: string;
  public regiao: string;
  public name: string;
  public cidade: string;
  public temperatura: number;
  public graus: number;
  public velocidade: number;
  public pressao: number;
  public umidade: number;
  public nublado: number;
  public horaLocal: string;  

  constructor(
    private formBuilder: FormBuilder,
    private climaservice: ClimaService,    
  )
   {
    this.visivel = 'invisivel';
    this.pesquisaClimaRegiao = this.formBuilder.group({
      location: [''],
      current: [''],    
    });
  }
  
  ngOnInit() {  }   

  getClima(formValues) {
    if (formValues.location) {
      this.climaservice.getWeather(formValues.location).subscribe(data => {
       this.weatherData = data;
        //this.ClimaTempo = data;
        this.visivel = 'visivel';
        this.setToList();
        this.clear();
      });
    }
  }

  setToList(){    
    this.regiao = this.weatherData.location.region;
    this.name = this.weatherData.location.name;
    this.cidade = this.weatherData.location.country;
    this.temperatura = this.weatherData.current.temperature;
    this.graus = this.weatherData.current.feelslike;
    this.velocidade = this.weatherData.current.wind_speed;
    this.pressao = this.weatherData.current.pressure;
    this.umidade = this.weatherData.current.humidity;
    this.nublado = this.weatherData.current.cloudcover;
    this.horaLocal = this.weatherData.location.localtime;
    this.setIcone();    
  }

  clear(){
    this.pesquisaClimaRegiao.reset();
  }
  setIcone(){
    let temperatura = this.weatherData.current.temperature;
    let hora =  parseInt(this.horaLocal.substring(11,13)); 

    //Tempo Tarde e Manhã (considerando após 05h): Exibe o ícone de sol + nuvem caso temperatura >=23 e<=27
    if ((temperatura >= 23 && temperatura <= 27) && (hora >= 5 && hora < 18))
    {
      return this.icone = '/assets/img/weather_icon_partly_cloudy.svg';
    }

    //Tempo Tarde e Manhã (considerando após 05h): Exibe o ícone de chuva caso temperatura <= 22
    if ((temperatura <= 22) && (hora >= 5 && hora < 18))
    {
      return this.icone = '/assets/img/weather_icon_rainy.svg'
    }

    //Tempo Tarde: Exibe o ícone de sol caso temperatura >= 28
    if ((temperatura >= 28 ) && (hora >= 12 && hora < 18))
    {
      return this.icone = '/assets/img/weather_icon_full_sun.svg'
    }

    //Tempo Noite (considerando 00h às 04h): Exibe o ícone de chuva com raios caso temperatura <= 21
    if ((temperatura <= 21) && ((hora >= 0 && hora <= 4) || (hora >= 18 && hora <= 24) ))
    {
      return this.icone = '/assets/img/weather_icon_thunder.svg'
    }

    //Tempo Noite (considerando 00h às 04h): Exibe o ícone de nuvens caso temperatura >= 22
    if ((temperatura >= 22) && ((hora >= 0 && hora <= 4) || (hora >= 18 && hora <= 24) ))
    {
      return this.icone = '/assets/img/weather_icon_full_clouds.svg'
    }

  }
}