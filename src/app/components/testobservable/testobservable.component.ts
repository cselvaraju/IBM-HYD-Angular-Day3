import { Component, OnInit } from '@angular/core';

import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-testobservable',
  templateUrl: './testobservable.component.html',
  styleUrls: ['./testobservable.component.css']
})
export class TestobservableComponent implements OnInit {

  data: any;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.generateData().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      }
    );
  }

}
