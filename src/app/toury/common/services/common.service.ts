import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: Http) { } 

  getCountryList() {
    return this.httpClient.get('https://restcountries.eu/rest/v2/all').map((res: Response) => res.json());
  }
}
