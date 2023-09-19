import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../store/counter.selector';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  counter$!:Observable<number>;
  constructor(
    // private store: Store<{counter: ICounterState}> // we can also add only selected States like that or complete state Like Below
    private store: Store<IAppState>
  ) {
    this.counter$ = this.store.select(getCounter);
  }

  
}
