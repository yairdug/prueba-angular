import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //Api URL
  newApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=30118edf26974232b658c4cf90dfdbb8";
   //Api Local
  localApiUrl = "https://newsapi.org/v2/top-headlines?country=mx&apiKey=30118edf26974232b658c4cf90dfdbb8"; 
  // Api newest
  newestApiUrl = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=30118edf26974232b658c4cf90dfdbb8";

  //TopHeading
  topheading():Observable<any>
  {
    return this._http.get(this.newApiUrl);
  }

   //Local news
   localNews():Observable<any>
   {
     return this._http.get(this.localApiUrl);
   }

   //newest
   newestNews():Observable<any>
   {
     return this._http.get(this.newestApiUrl);
   }
}
