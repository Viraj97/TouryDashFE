import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../service/destination.service';
import { navItems } from '../../../_nav';

@Component({
  selector: 'app-view-destinations',
  templateUrl: './view-destinations.component.html',
  styleUrls: ['./view-destinations.component.scss']
})
export class ViewDestinationsComponent implements OnInit {
  public navItems = navItems;
  public destinationsArray = [];
  public currentPage = 1;
  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.getDestinations(0, 8);
  }

  getDestinations(startIndex: number, endIndex: number) {
    this.destinationsArray = [];
    this.destinationService.getDestinations(startIndex, endIndex).subscribe(element => {
      element.forEach(destination => {
        let tempObject = {
          id: destination.destinationId,
          name: destination.destinationName,
          thumbnail: destination.destinationName
        }
        this.destinationsArray.push(tempObject);
      })
    });
  }

  paginate(pageIndex) {
    if (typeof pageIndex === 'number') {
      this.currentPage = pageIndex;
    }
    switch (pageIndex) {
      case 1:
        this.getDestinations(this.getStartIndexForPage(pageIndex), this.getEndIndexForPage(pageIndex));
        break;

      case 2:
        this.getDestinations(this.getStartIndexForPage(pageIndex), this.getEndIndexForPage(pageIndex));
        break;

      case 3:
        this.getDestinations(this.getStartIndexForPage(pageIndex), this.getEndIndexForPage(pageIndex));
        break;

      case 4:
        this.getDestinations(this.getStartIndexForPage(pageIndex), this.getEndIndexForPage(pageIndex));
        break;

      case 5:
        this.getDestinations(this.getStartIndexForPage(pageIndex), this.getEndIndexForPage(pageIndex));
        break;

      case 'next':
        this.getDestinations(this.getStartIndexForPage(this.currentPage + 1), this.getEndIndexForPage(this.currentPage + 1))
        this.currentPage++;
        break;

      case 'prev':
        this.getDestinations(this.getStartIndexForPage(this.currentPage - 1), this.getEndIndexForPage(this.currentPage - 1))
        this.currentPage--;
        break;
    }
  }

  getStartIndexForPage(pageIndex:number) {
    return (pageIndex - 1) * 8
  }

  getEndIndexForPage(pageIndex:number) {
    return pageIndex * 8;
  }

}
