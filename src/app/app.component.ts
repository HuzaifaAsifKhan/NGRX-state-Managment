import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IShareState } from './shared/store/shared.state';
import { getLoader, getErrorMessage } from './shared/store/share.selector';
import { getUser, loginStart } from './auth/store/auth.action';
import { IAppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-counter';
  showLoader!: Observable<boolean>;
  errorMessage!: Observable<string>;
  // constructor(private store: Store<{ share: IShareState }>) {
  constructor(private store: Store<IAppState>) {
    this.showLoader = this.store.select(getLoader);
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(getUser());
  }
}
