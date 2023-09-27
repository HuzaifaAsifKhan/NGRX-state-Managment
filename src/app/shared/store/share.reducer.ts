import { createReducer, on } from "@ngrx/store";
import { IShareState } from "./shared.state";
import { setLoader, setErrormessage } from "./share.action";

export const shareReducer = createReducer(
    new IShareState(),
    on(setLoader, (state, action) => {
        return {
            ...state,
            showLoader: action.status
        }
    }),
    on(setErrormessage, (state, action) => {
        return {
            ...state,
            errroMessage: action.message
        }
    })
)