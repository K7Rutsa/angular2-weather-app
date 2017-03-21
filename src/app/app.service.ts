import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AppService {
	
	constructor(private _htpp: Http) {}

	get(city){
		return this._htpp.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=d72749f618ebb5e1c0008c57a981db4c&units=metric`)
			.map((res: Response) => res.json())
		    .catch(this.errorHandler)
	}

	getWeatherArr(city){
		return this._htpp.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=d72749f618ebb5e1c0008c57a981db4c&units=metric`)
			.map((res: Response) => res.json().weather)
		    .catch(this.errorHandler)
	}

	private errorHandler(error){
		return Observable.throw(error.json())
	}
}