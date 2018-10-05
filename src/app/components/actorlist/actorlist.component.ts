import { Component, OnInit } from '@angular/core';
import { Actor } from '../../models/actor.model';

import { ActorService } from '../../services/actor.service';

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: [
    './actorlist.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    '../../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class ActorlistComponent implements OnInit {

  actorList: Actor[];
  newActor: Actor;
  tempActor: Actor;
  actor: Actor;
  selectedIndex: number;
  obj = {x: 20, y: 30};
  today = new Date();

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actorService.getActors().subscribe(
      (data) => {
        this.actorList = data;
      }
    );
    this.newActor = this.tempActor = {name: '', city: ''};
    this.selectedIndex = -1;
    this.actor = {name: '', city: ''};
  }

  deleteActor(index) {
    // this.actorList.splice(index, 1);
    // this.actorService.deleteActor(index);
  }

  addActor() {
    // this.actorList.push(this.newActor);
    // this.actorService.addActor(this.newActor);
    this.newActor = {name: '', city: ''};
  }

  editActor(index) {
    this.selectedIndex = index;
    // this.tempActor = this.actorList[index];
    this.tempActor = Object.assign({}, this.actorList[index]);
  }

  updateActor() {
    // this.actorService.updateActor(
      // this.selectedIndex,
      // this.actorList[this.selectedIndex]
    // );
    this.selectedIndex = -1;
  }

  cancelEdit() {
    this.actorList[this.selectedIndex] = this.tempActor;
    this.selectedIndex = -1;
  }

  keyHandler(event) {
    if (event.key === 'Escape') {
      this.cancelEdit();
    }
  }
}
