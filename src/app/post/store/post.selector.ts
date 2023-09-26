import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPost, IPostState } from "./post.state";

export const POST_STATE = 'posts';
const getPostState = createFeatureSelector<IPostState>(POST_STATE);

export const getPosts = createSelector(getPostState, state => {
    return state.posts;
})

export const getPostById = createSelector(getPostState, (state:any, id:any) => {
    return state.posts.find((item: IPost) => item.id === id);
})