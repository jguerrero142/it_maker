import { ActionReducerMap, Action } from '@ngrx/store';

//Reducers Store Ngrx
import * as user from './user.reducer';

/**
 * Se importa el estado de la aplicacion
 * 
 */
export interface AppState {
    user: user.State
}

/**
 * Se Relaciona el user que se comunica con los actions del estado
 * 
 */

export const appStore: ActionReducerMap<AppState> = {
    user: user.usersReducer
}
