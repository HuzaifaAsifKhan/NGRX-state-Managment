import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { loginStart } from '../store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private store: Store<IAppState>){
    this.loginForm = new FormGroup({ 
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onLogin(){
    this.store.dispatch(loginStart(this.loginForm.value)); 
    this.loginForm.reset();
  }

  showErrors(formProperty:string): string{
    const controler:any = this.loginForm.controls[formProperty];
    if((controler.touched || controler.dirty) && controler.errors){
      if(controler.errors['required']){
        return `${formProperty} must required`
      } else if(controler.errors['minlength']){
        return `${formProperty} have Insufficient Length`
      }
      return '';
    }
    return '';
  }
}
