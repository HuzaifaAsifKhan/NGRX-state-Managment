import { counterReducer } from "../counter/store/counter.reducer";
import { postReducer } from "../post/store/post.reducer";

export const appReducer = {
 counter : counterReducer,
 posts: postReducer
}