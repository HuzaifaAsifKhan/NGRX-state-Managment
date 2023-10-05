import { createReducer, on } from '@ngrx/store';
import { IPostState } from './post.state';
import {
  addPostSuccess,
  deletePostSuccess,
  loadPostSuccess,
  updatePostSuccess,
} from './post.action';

export const postReducer = createReducer(
  new IPostState(),
  on(addPostSuccess, (state, action) => {
    const data = { ...action.post };
    return {
      ...state,
      posts: [...state.posts, data],
    };
  }),
  on(deletePostSuccess, (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((item) => item.id !== action.id),
    };
  }),
  on(updatePostSuccess, (state, { updatedPost }) => {
    return {
      ...state,
      posts: state.posts.map((item) =>
        item.id === updatedPost.id ? updatedPost : item
      ),
    };
  }),
  on(loadPostSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);
