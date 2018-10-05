import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childCount: number;
  message: string;

  @Output() countChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.message = `Child component received data: ${this.childCount}`;
  }

  incrementCount() {
    ++this.childCount;
    this.message = `Child component count incremented to: ${this.childCount}`;
    this.countChanged.emit(this.childCount);
  }

  decrementCount() {
    --this.childCount;
    this.message = `Child component count decremented to: ${this.childCount}`;
    this.countChanged.emit(this.childCount);
  }
}
