import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  city: string;
	wdata: any;
  wArr: any[] = [];
	error: any;

  	constructor(private _appService: AppService){}

  	getWeather(city){
      this.city = city;
  		this._appService.get(city)
  			.subscribe((data) => this.wdata = data, error => this.error = error)
        if(this.wdata){
        console.log(this.wdata);
        }
      this._appService.getWeatherArr(city)
        .subscribe((data) => this.wArr = data, error => this.error = error)
         if(this.wArr){
        console.log(this.wArr);
  	}

  }

}
