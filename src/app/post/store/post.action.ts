import { createAction, props } from "@ngrx/store";
import { IPost } from "./post.state";

export const addPost = createAction('addPost', props<IPost>());
export const deletePost = createAction('deletePost', props<{id: string}>());
export const updatePost = createAction('updatePost', props<{updatedPost: IPost}>());