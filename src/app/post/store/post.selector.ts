import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPost, IPostState } from "./post.state";

const getPostState = createFeatureSelector<IPostState>('posts');

export const getPosts = createSelector(getPostState, state => {
    return state.posts;
})

export const getPostById = createSelector(getPostState, (state:any, id:any) => {
    return state.posts.find((item: IPost) => item.id === id);
})