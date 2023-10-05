import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../services/post.service';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPostStart,
  loadPostSuccess,
  updatePost,
  updatePostSuccess,
} from './post.action';
import { map, mergeMap } from 'rxjs';
import { IPost } from './post.state';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { setLoader } from 'src/app/shared/store/share.action';

@Injectable()
export class PostEffects {
  constructor(
    private store: Store<IAppState>,
    private actions$: Actions,
    private postService: PostService
  ) {}

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPostStart),
      mergeMap((action: any) => {
        this.store.dispatch(setLoader({ status: true }));
        return this.postService.getPosts().pipe(
          map((posts: IPost[]) => {
            this.store.dispatch(setLoader({ status: false }));
            return loadPostSuccess({ posts });
          })
        );
      })
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      mergeMap((action: any) => {
        this.store.dispatch(setLoader({ status: true }));
        return this.postService.addPost(action.post).pipe(
          map((resp) => {
            this.store.dispatch(setLoader({ status: false }));
            const post = { ...action.post, id: resp.name };
            return addPostSuccess({ post });
          })
        );
      })
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost),
      mergeMap((action: any) => {
        this.store.dispatch(setLoader({ status: true }));
        return this.postService.updatePost(action.updatedPost).pipe(
          map((resp) => {
            this.store.dispatch(setLoader({ status: false }));
            return updatePostSuccess({ updatedPost: action.updatedPost });
          })
        );
      })
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost),
      mergeMap((action) => {
        this.store.dispatch(setLoader({ status: true }));
        return this.postService.deletePost(action.id).pipe(
          map((resp) => {
            this.store.dispatch(setLoader({ status: false }));
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    )
  );
}
