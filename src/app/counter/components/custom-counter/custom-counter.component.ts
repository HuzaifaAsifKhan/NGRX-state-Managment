import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannleName, customIncrement } from '../../store/counter.action';
import { getChannleName } from '../../store/counter.selector';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
})
export class CustomCounterComponent {
  customValue!: number;
  channleName$!: Observable<string>;
  constructor(private store: Store<IAppState>) {
    this.channleName$ = this.store.select(getChannleName);
  }

  addToCounter(): void {
    this.store.dispatch(customIncrement({ customValue: this.customValue }));
  }

  changeChannleName(): void {
    this.store.dispatch(changeChannleName());
  }
}
