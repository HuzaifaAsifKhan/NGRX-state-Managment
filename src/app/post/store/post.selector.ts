import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPost, IPostState } from './post.state';
import { getRouterParams } from 'src/app/store/router/router.selector';
import { RouterStateUrl } from 'src/app/store/router/custom-route-serializer';

export const POST_STATE = 'posts';
const getPostState = createFeatureSelector<IPostState>(POST_STATE);

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPosts,
  getRouterParams,
  (posts: any, route: RouterStateUrl) => {
    return posts
      ? posts.find((item: IPost) => item.id === route.params['id'])
      : null;
  }
);
