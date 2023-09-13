import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/store/counter.reducer';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CustomCounterComponent } from './counter/custom-counter/custom-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
