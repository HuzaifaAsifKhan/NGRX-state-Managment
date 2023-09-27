import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IShareState } from "./shared.state";
export const SHARE_STATE = 'share'

const getShareState = createFeatureSelector<IShareState>(SHARE_STATE);

export const getLoader = createSelector(getShareState, state => {
    return state.showLoader
})
export const getErrorMessage = createSelector(getShareState, state => {
    return state.errroMessage
})
