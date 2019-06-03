import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  // templateUrl: './counter.component.html',
  template: `
    <h2>{{myCount | async }}</h2>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  myCount: Observable<number>;
  constructor(private store: Store<number>) {
    // get data from store
    this.myCount = this.store.pipe(select('counter'));
  }

  ngOnInit() {
  }

}
