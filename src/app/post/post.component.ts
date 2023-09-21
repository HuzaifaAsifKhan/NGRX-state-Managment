import { Component } from '@angular/core';
import { IPost } from './store/post.state';
import { Store } from '@ngrx/store';
import { getPosts } from './store/post.selector';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/store/app.state';
import { deletePost } from './store/post.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts$!: Observable<IPost[]>;
  constructor(private store: Store<IAppState>){
    this.posts$ = this.store.select(getPosts);
  }

  deletePost(id: string){
    if(confirm("Are you sure!")) this.store.dispatch(deletePost({id}));
  }
}
