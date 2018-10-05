import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  data: Observable<any>;

  constructor() { }

  generateData() {
    this.data = new Observable<any>(
      subscriber => {
        setTimeout(() => {
          subscriber.next(10);
        }, 5000);

        setTimeout(() => {
          subscriber.next(20);
        }, 10000);

        setTimeout(() => {
          subscriber.next({name: 'Amitabh'});
        }, 15000);
      }
    );
    return this.data;
  }
}
