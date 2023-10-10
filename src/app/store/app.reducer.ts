import { routerReducer } from '@ngrx/router-store';
import { counterReducer } from '../counter/store/counter.reducer';
import { postReducer } from '../post/store/post.reducer';
import { shareReducer } from '../shared/store/share.reducer';

export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
  share: shareReducer,
  router: routerReducer,
};
