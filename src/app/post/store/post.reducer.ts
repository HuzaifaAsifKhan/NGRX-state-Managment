import { createReducer, on } from "@ngrx/store";
import { IPostState } from "./post.state";
import { addPost, deletePost, getPost, getPosts, updatePost } from "./post.action";

export const postReducer = createReducer(
    new IPostState(),
    on(getPosts, (state) => {
        return {
            ...state
        }
    }),
    on(addPost, (state) => {
        return {
            ...state
        }
    }),
    on(getPost, (state) => {
        return {
            ...state
        }
    }),
    on(deletePost, (state) => {
        return {
            ...state
        }
    }),
    on(updatePost, (state) => {
        return {
            ...state
        }
    }),
)