import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../service/destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.scss']
})
export class AddDestinationComponent implements OnInit {

  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.getDestinations(0, 10);
  }

  getDestinations(startIndex: number, endIndex: number) {
    this.destinationService.getDestinations(startIndex, endIndex).subscribe(element => {
      element.forEach(destination => {
        console.log(destination);
      })
    });
  }
}
