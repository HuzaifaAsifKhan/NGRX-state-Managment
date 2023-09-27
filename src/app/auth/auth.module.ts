import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { StoreModule } from '@ngrx/store';
// import { AuthReducer } from './store/auth.reducer';
// import { AUTH_STATE } from './store/auth.selector';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/auth.effect';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    FormsModule,
    EffectsModule.forFeature([AuthEffects]),
    // StoreModule.forFeature(AUTH_STATE, AuthReducer),
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
