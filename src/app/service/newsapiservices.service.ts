import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

//newsApi
newApiurl = " https://newsapi.org/v2/top-headlines?country=in&apiKey=d4c3164091824008b75834ce06ead18e";


// technewsapiurl
teachApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d4c3164091824008b75834ce06ead18e";

// busninessnewsapiurl
businessApiUrl= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d4c3164091824008b75834ce06ead18e";


 //topheading


topHeading():Observable<any>{

return this._http.get(this.newApiurl);

}

//teachnews ()
techNews ():Observable<any>


{
  return this._http.get(this.teachApiUrl);
}

// businessNews
businessNews ():Observable<any>{

return this._http.get(this.businessApiUrl);

}






}
