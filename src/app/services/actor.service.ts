import { Injectable } from '@angular/core';

import { Actor } from '../models/actor.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorList: Observable<Actor[]>;

  constructor() {
  }

  getActors() {
    this.actorList = new Observable<Actor[]>(
      observer => {
        setTimeout(() => {
          observer.next(
            [
              {name: 'Amitabh Bachhan', city: 'Mumbai'},
              {name: 'Venkatesh', city: 'Hyderabad'},
              {name: 'Kamal Hasan', city: 'Chennai'}
            ]
          );
        }, 5000);
      }
    );
    return this.actorList;
  }

  // deleteActor(index) {
  //   this.actorList.splice(index, 1);
  // }

  // updateActor(index, actor) {
  //   this.actorList.splice(index, 1, actor);
  // }

  // addActor(actor) {
  //   this.actorList.push(actor);
  // }
}
