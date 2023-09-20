import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { counterReducer } from './counter/store/counter.reducer';
// import { postReducer } from './post/store/post.reducer';
import { appReducer } from './store/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/coponents/header/header.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CustomCounterComponent } from './counter/custom-counter/custom-counter.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { AddPostComponent } from './post/post-list/components/add-post/add-post.component';
import { EditPostComponent } from './post/post-list/components/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterComponent,
    PostListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // StoreModule.forRoot({ counter: counterReducer, posts: postReducer }), // I can do that or like below to create reducer file in app store & put all those in one file
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), trace: true, traceLimit: 75})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
