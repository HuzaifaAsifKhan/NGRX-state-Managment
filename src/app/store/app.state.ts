import { IUserState } from "../auth/store/auth.state";
import { ICounterState } from "../counter/store/counter.state";
import { IPostState } from "../post/store/post.state";
import { IShareState } from "../shared/store/shared.state";

export class IAppState {
    counter = new ICounterState();
    posts = new IPostState();
    auth = new IUserState();
    share = new IShareState();
}