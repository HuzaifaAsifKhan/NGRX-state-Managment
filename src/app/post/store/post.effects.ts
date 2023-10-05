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

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPostStart),
      mergeMap((action: any) =>
        this.postService
          .getPosts()
          .pipe(map((posts: IPost[]) => loadPostSuccess({ posts })))
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      mergeMap((action: any) =>
        this.postService.addPost(action.post).pipe(
          map((resp) => {
            const post = { ...action.post, id: resp.name };
            return addPostSuccess({ post });
          })
        )
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePost),
      mergeMap((action: any) =>
        this.postService
          .updatePost(action.updatedPost)
          .pipe(
            map((resp) =>
              updatePostSuccess({ updatedPost: action.updatedPost })
            )
          )
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost),
      mergeMap((action) =>
        this.postService
          .deletePost(action.id)
          .pipe(map((resp) => deletePostSuccess({ id: action.id })))
      )
    )
  );
}
