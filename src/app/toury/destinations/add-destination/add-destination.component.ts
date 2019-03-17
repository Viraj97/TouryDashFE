import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../service/destination.service';
import { navItems } from '../../../_nav';
import { CommonService } from '../../common/services/common.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.scss']
})
export class AddDestinationComponent implements OnInit {
  public navItems = navItems;
  constructor(private destinationService: DestinationService, private commonService: CommonService) { }

  ngOnInit() {
    this.getDestinations(0, 10);
    this.getCountryList();
  }

  getDestinations(startIndex: number, endIndex: number) {
    this.destinationService.getDestinations(startIndex, endIndex).subscribe(element => {
      element.forEach(destination => {
        console.log(destination);
      })
    });
  }

  getCountryList() {
    let countryArray = [];
    this.commonService.getCountryList().subscribe(responseData => {
      responseData.forEach(countryObject => {
        countryArray.push(countryObject)
      });
    });
  }
}
