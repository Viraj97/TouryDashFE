import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../sample.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.scss']
})
export class AddDestinationComponent implements OnInit {

  constructor(public sample: SampleService) { }

  ngOnInit() {
    this.method1();
  }

  method1() {
    this.sample.getData().subscribe((data: {}) => {
      console.log('123', data);
    });
  }
}
