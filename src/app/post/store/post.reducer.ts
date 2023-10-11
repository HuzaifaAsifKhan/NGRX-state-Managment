import { createReducer, on } from '@ngrx/store';
import { IPostState, postAdapter } from './post.state';
import {
  addPostSuccess,
  deletePostSuccess,
  loadPostSuccess,
  updatePostSuccess,
} from './post.action';

export const postReducer = createReducer(
  // new IPostState(),
  IPostState,
  on(addPostSuccess, (state, action) => {
    // const data = { ...action.post };
    // return {
    //   ...state,
    //   posts: [...state.posts, data],
    // };
    return postAdapter.addOne(action.post, state);
  }),
  on(deletePostSuccess, (state, action) => {
    // return {
    //   ...state,
    //   posts: state.posts.filter((item) => item.id !== action.id),
    // };
    return postAdapter.removeOne(action.id, state);
  }),
  on(updatePostSuccess, (state, { updatedPost }) => {
    // return {
    //   ...state,
    //   posts: state.posts.map((item) =>
    //     item.id === updatedPost.id ? updatedPost : item
    //   ),
    // };
    return postAdapter.updateOne(updatedPost, state);
  }),
  on(loadPostSuccess, (state, action) => {
    // return {
    //   ...state,
    //   posts: action.posts,
    // };
    return postAdapter.setAll(action.posts, state);
  })
);
