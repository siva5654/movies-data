import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

    public domain: string = 'https://api.themoviedb.org/3/movie/';
    public apiKey :any ='67fcc30670d6dca7616c249133ab244a';

    public toprate = this.domain+'top_rated?api_key='+ this.apiKey +'&language=en-US&page=1';
    public upcoming = this.domain+'upcoming?api_key='+ this.apiKey +'&language=en-US';


    constructor(private _http:HttpClient) { }

      getToprated(){
        return this._http.get(this.toprate);
      }
      getupcoming(){
        return this._http.get(this.upcoming);
      }


}
