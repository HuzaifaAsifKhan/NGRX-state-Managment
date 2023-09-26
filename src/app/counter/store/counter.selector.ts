import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "./counter.state";

export const COUNTER_STATE = 'counter'

const getCounterState = createFeatureSelector<ICounterState>(COUNTER_STATE);


export const getCounter = createSelector(getCounterState, state => {
    return state.counter;
});
 
export const getChannleName = createSelector(getCounterState, state => {
    return state.channleName;
});