import { createAction } from "@ngrx/store";

export const getPosts = createAction('getPosts');
export const addPost = createAction('addPost');
export const deletePost = createAction('deletePost');
export const updatePost = createAction('updatePost');
export const getPost = createAction('getPost');