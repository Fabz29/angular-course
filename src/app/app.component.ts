import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs-compat';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      value => {
        this.secondes = value;
      },
      error => {
        console.error('Oh oh, an error occured! ' + error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
