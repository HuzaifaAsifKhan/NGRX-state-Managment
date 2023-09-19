import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPostState } from "./post.state";

const getPostState = createFeatureSelector<IPostState>('posts');

export const getPosts = createSelector(getPostState, state => {
    return state.posts;
})