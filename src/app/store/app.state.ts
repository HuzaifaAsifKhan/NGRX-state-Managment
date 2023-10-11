import { RouterReducerState } from '@ngrx/router-store';
import { IUserState } from '../auth/store/auth.state';
import { ICounterState } from '../counter/store/counter.state';
// import { IPostState } from '../post/store/post.state';
import { IShareState } from '../shared/store/shared.state';
import { IPostEntity } from '../post/store/post.state';

export class IAppState {
  counter = new ICounterState();
  // posts = new IPostState();
  posts!: IPostEntity;
  auth = new IUserState();
  share = new IShareState();
  router!: RouterReducerState;
}
