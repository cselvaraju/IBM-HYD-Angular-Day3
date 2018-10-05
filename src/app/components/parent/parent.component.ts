import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCount: number;
  message: string;

  constructor() { }

  ngOnInit() {
    this.parentCount = 55;
    this.message = `Child count initializing to ${this.parentCount}`;
  }

  onCountChanged(eventData: number) {
    this.message = `Child count changed to ${eventData}`;
  }
}
