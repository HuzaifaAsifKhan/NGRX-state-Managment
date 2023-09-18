import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../store/counter.state';
import { changeChannleName, customIncrement } from '../store/counter.action';
import { getChannleName } from '../store/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent {
  customValue!: number;
  channleName$!: Observable<string>;
  constructor(
    private store: Store<{counter: ICounterState}>
  ){
    this.channleName$ =  this.store.select(getChannleName);
  }
  
  addToCounter(): void {
    this.store.dispatch(customIncrement({customValue: this.customValue}))
  }

  changeChannleName(): void {
    this.store.dispatch(changeChannleName());
  }
}
