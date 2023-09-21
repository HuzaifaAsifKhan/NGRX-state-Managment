import { createReducer, on } from "@ngrx/store";
import { IPostState } from "./post.state";
import { addPost, deletePost, updatePost } from "./post.action";

export const postReducer = createReducer(
    new IPostState(),
    on(addPost, (state, action) => {
        action = { ...action, id: (state.posts.length + 1).toString() }
        return {
            ...state,
            posts: [...state.posts, action]
        }
    }),
    on(deletePost, (state) => {
        return {
            ...state
        }
    }),
    on(updatePost, (state, action) => {
        return {
            ...state,
            posts: state.posts.map(item => item.id === action.id ? action : item)
        }
    }),
)