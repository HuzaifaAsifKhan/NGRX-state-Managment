import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/auth/store/auth.action';
import { getUser } from 'src/app/auth/store/auth.selector';
import { IUser } from 'src/app/auth/store/auth.state';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$!: Observable<IUser | null>;
  constructor(private store: Store<IAppState>) {
    this.user$ = this.store.select(getUser);
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
