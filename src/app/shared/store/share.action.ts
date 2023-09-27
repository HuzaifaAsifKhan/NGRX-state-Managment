import { createAction, props } from "@ngrx/store";

export const setLoader = createAction('startLoader', props<{status: boolean}>());
export const setErrormessage = createAction('errorMessage', props<{message: string}>());