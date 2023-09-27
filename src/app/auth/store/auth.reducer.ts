import { createReducer, on } from "@ngrx/store";
import { User } from "./auth.state";
import { loginStart, loginSuccess } from "./auth.action";

export const AuthReducer = createReducer(
    new User(),
    // we dont need to call loginStart when we have effect calling on function behafe
    // on(loginStart, (state, action) => {
    //     return {
    //         ...state
    //     }
    // }),
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })
)