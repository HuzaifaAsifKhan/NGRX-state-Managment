import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-route-serializer';

export const ROUTER_STATE = 'router';
const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>(ROUTER_STATE);

export const getRouterParams = createSelector(getRouterState, (routerState) => {
  return routerState.state;
});
