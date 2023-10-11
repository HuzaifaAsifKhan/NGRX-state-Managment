import { createAction, props } from '@ngrx/store';
import { IPost } from './post.state';
import { Update } from '@ngrx/entity';

// Add
export const addPost = createAction('addPost', props<{ post: IPost }>());
export const addPostSuccess = createAction(
  'addPostSuccess',
  props<{ post: IPost }>()
);
// Delete
export const deletePost = createAction('deletePost', props<{ id: string }>());
export const deletePostSuccess = createAction(
  'deletePostSuccess',
  props<{ id: string }>()
);
// Update
// export const updatePost = createAction(
//   'updatePost',
//   props<{ updatedPost: IPost }>()
// );
export const updatePost = createAction(
  'updatePost',
  props<{ updatedPost: IPost }>()
);
export const updatePostSuccess = createAction(
  'updatePostSuccess',
  props<{ updatedPost: Update<IPost> }>()
);
// Load
export const loadPostStart = createAction('loadPostStart');
export const loadPostSuccess = createAction(
  'loadPostSuccess',
  props<{ posts: IPost[] }>()
);
