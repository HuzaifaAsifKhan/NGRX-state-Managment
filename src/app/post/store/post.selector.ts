import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPost, IPostState, postAdapter } from './post.state';
import { getRouterParams } from 'src/app/store/router/router.selector';
import { RouterStateUrl } from 'src/app/store/router/custom-route-serializer';

export const POST_STATE = 'posts';
const getPostState = createFeatureSelector<typeof IPostState>(POST_STATE);

const { selectAll, selectEntities } = postAdapter.getSelectors();

export const getPosts = createSelector(
  getPostState,
  selectAll
  // (state) => {
  // return state.posts;
  // }
);

const getPostEntites = createSelector(getPostState, selectEntities);

export const getPostById = createSelector(
  getPostEntites,
  getRouterParams,
  (posts, route: RouterStateUrl) => {
    return posts ? posts[route.params['id']] : null;
  }
);
// export const getPostById = createSelector(
//   getPosts,
//   getRouterParams,
//   (posts: any, route: RouterStateUrl) => {
//     return posts
//       ? posts.find((item: IPost) => item.id === route.params['id'])
//       : null;
//   }
// );
