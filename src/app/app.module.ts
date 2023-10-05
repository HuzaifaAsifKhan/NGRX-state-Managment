import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { counterReducer } from './counter/store/counter.reducer';
// import { postReducer } from './post/store/post.reducer';
// import { appReducer } from './store/app.reducer';
import { AuthReducer } from './auth/store/auth.reducer';
import { shareReducer } from './shared/store/share.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { LoaderSpinnerComponent } from './shared/components/loader-spinner/loader-spinner.component';
import { AuthEffects } from './auth/store/auth.effect';
import { AuthService } from './shared/services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/services/auth.gaurd';
import { HttpTokenInterceptor } from './shared/interceptors';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoaderSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([AuthEffects]),
    // StoreModule.forRoot({ counter: counterReducer, posts: postReducer, share: shareReducer }), // I can do that or like below to create reducer file in app store & put all those in one file
    // StoreModule.forRoot(appReducer), // Whoel store Loader with Variable
    StoreModule.forRoot({ share: shareReducer, auth: AuthReducer }), //above modules are loaded on Application load, but now Lazzy load the Store as per requirment
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: true,
      traceLimit: 75,
    }),
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
