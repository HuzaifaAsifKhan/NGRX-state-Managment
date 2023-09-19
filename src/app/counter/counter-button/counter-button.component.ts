import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/counter.action';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  constructor(
    private store: Store<IAppState>
  ) {}

  onIncrement = () => this.store.dispatch(increment());
  
  onDecrement = () => this.store.dispatch(decrement());

  onReset = () => this.store.dispatch(reset());
}
