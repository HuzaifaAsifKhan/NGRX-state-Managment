import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../store/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  counter$!:Observable<number>;
  constructor(
    private store: Store<{counter: ICounterState}>
  ) {
    this.counter$ = this.store.select(getCounter);
  }

  
}
