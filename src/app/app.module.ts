import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { counterReducer } from './counter/store/counter.reducer';
// import { postReducer } from './post/store/post.reducer';
// import { appReducer } from './store/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/coponents/header/header.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    // StoreModule.forRoot({ counter: counterReducer, posts: postReducer }), // I can do that or like below to create reducer file in app store & put all those in one file
    // StoreModule.forRoot(appReducer),
    StoreModule.forRoot({}), //above two module are loaded on Application load , now Lazzy load the Store as per requirment
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), trace: true, traceLimit: 75})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
