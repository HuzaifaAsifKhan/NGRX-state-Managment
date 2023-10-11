import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../store/post.state';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { getPostById } from '../../store/post.selector';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
})
export class DetailPostComponent {
  post: Observable<IPost | null | undefined>;

  constructor(private store: Store<IAppState>) {
    this.post = this.store.pipe(select(getPostById));
  }
}
