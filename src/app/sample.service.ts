import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


// const endPoint = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  endPoint = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getData(): Observable<any> {
    return this.http.get(this.endPoint + 'Test1').pipe(map(this.extractData));
  }
}

