import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../store/counter.state';
import { customIncrement } from '../store/counter.action';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent {
  customValue!: number;
  constructor(
    private store: Store<{counter: ICounterState}>
  ){
  }
  

  addToCounter(): void {
    this.store.dispatch(customIncrement({customValue: this.customValue}))
  }
}
