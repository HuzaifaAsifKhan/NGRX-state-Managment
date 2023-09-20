import { Component } from '@angular/core';
import { IPost } from '../store/post.state';
import { Store } from '@ngrx/store';
import { getPosts } from '../store/post.selector';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts$!: Observable<IPost[]>;
  constructor(private store: Store<IAppState>){
    this.posts$ = this.store.select(getPosts);
  }

  updatePost(post: IPost){
    console.log(post);
  }
}
