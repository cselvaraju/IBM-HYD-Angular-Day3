import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  data: any;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    setTimeout(
      () => {
        this.observableService.generateData().subscribe(
          (data) => {
            console.log(data);
            this.data = data;
          }
        );
      },
      7000
    );
  }

}
