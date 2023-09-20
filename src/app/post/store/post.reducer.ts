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
    on(addPost, (state, action) => {
        action = { ...action, id: (state.posts.length + 1).toString() }
        return {
            ...state,
            posts: [...state.posts, action]
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