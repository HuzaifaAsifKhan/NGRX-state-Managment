import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';

import { CounterComponent } from './counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations:[
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
