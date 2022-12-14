import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './user.action';

export interface Users {
    id: number ,
    email?: string | null | undefined,
    first_name?: string | null | undefined,
    last_name?: string | null | undefined,
    avatar?: string | null | undefined,
}

export interface State {
    users: Users[];
    serial: number;
    loading: boolean;
    update: number;
}

export const initialState: State = {
    users: [],
    serial: 0,
    loading: false,
    update: 0
 }

 const _userReducer = createReducer(initialState,
    on(actions.loadingUser, state => ({ 
        ...state,
        loading: true})),

    on(actions.loadingSucces, (state, {serial}) => ({ 
        ...state,
        serial: serial,
        loading: false})),
    
    on(actions.cargarUser, (state, {users}) => ({ 
        ...state = initialState,
        users: users,
        loading: false})),
    
    on(actions.oneUser, (state, {user}) => ({ 
        ...state,
        users: [...state.users, user],
        serial:  state.serial + 1,
        loading: false})),
    
    on(actions.selectUser, (state, {id}) => ({ 
        ...state,
        update: id,
        user: [...state.users.filter(d => d.id == id)]
    })),

    on(actions.updateUser, (state, {user}) => ({ 
        ...state,
        users: [ ...state.users]
    })),

    on(actions.deleteUser, (state, {id}) => ({ 
        ...state,
        users: [ ...state.users.filter( d => d.id != id  )]
    })),
    
    );

    export function usersReducer(
        state: State = initialState, action: Action){
            
        return _userReducer(state, action);
    }
    
 
