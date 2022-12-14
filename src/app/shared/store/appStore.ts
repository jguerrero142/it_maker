import { ActionReducerMap, Action } from '@ngrx/store';

//Reducers Store Ngrx
import * as user from './user.reducer';
// import * as reducers from './reducer';

// import * as set from '../auth/auth.reducer';
// import * as ingreso from '../ingre-egre/ingreso.reducer';


export interface AppState {
    user: user.State
}

export const appStore: ActionReducerMap<AppState> = {
    user: user.usersReducer
}
