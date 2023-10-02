import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';

import { CounterComponent } from './counter.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { COUNTER_STATE } from './store/counter.selector';

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CounterRoutingModule,
    StoreModule.forFeature(COUNTER_STATE, counterReducer),
  ],
})
export class CounterModule {}
