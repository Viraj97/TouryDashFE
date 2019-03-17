import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Destination } from '../model/Destination';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private httpClient: Http) { }

  getDestinations(startIndex: number, endIndex: number) {
    return this.httpClient.get('http://localhost:8080/destinations', {
      params: {
        startIndex: startIndex, endIndex: endIndex
      }
    }).map((res: Response) => <Destination[]>res.json());
  }

  addNewDestinations(newDestination: Destination) {

  }
}
