import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, customIncrement } from './counter.action';
import { ICounterState } from './counter.state';


export const counterReducer = createReducer(
    new ICounterState(),
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    // on(customIncrement, (state, action) => {  // we can directly access the data like below
    on(customIncrement, (state, {customValue}) => {
        return {
            ...state,
            counter: state.counter + customValue
        }
    })
)