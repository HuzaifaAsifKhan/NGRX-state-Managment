import { ICounterState } from "../counter/store/counter.state";
import { IPostState } from "../post/store/post.state";

export class IAppState {
    counter = new ICounterState();
    posts = new IPostState();
}