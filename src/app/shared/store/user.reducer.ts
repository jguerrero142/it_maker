import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './user.action';


/**
 * Se declara el estado de la variable users dentro del estado
 * 
 */
export interface Users {
    id: number ,
    email?: string | null | undefined,
    first_name?: string | null | undefined,
    last_name?: string | null | undefined,
    avatar?: string | null | undefined,
}

/**
 * Se declara el estado de la aplicacion
 * 
 */
export interface State {
    users: Users[];
    serial: number;
    loading: boolean;
    update: number;
    user: Users | undefined
}

/**
 * Se inicializa el estado
 * 
 */

const us = {
    id: 0 ,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
}
export const initialState: State = {
    users: [],
    serial: 0,
    loading: false,
    update: 0,
    user: us
 }
/**
 * Se declaran los reducer que modificaran el estado de la aplicacion
 * 
 */
 const _userReducer = createReducer(initialState,
    /**
 * Activa el cargue del loading de la aplicacion
 * 
 */
    on(actions.loadingUser, state => ({ 
        ...state,
        loading: true})),

        /**
 * Desactiva el loading de la aplicacion
 * 
 */
    on(actions.loadingSucces, (state, {serial}) => ({ 
        ...state,
        serial: serial,
        loading: false})),

        /**
 * Carga los usuario en primera instancia de la aplicacion
 * 
 */
    
    on(actions.cargarUser, (state, {users}) => ({ 
        ...state = initialState,
        users: users,
        loading: false})),

        /**
 * Ingresa un usuario al estado de la aplicacion
 * 
 */
    
    on(actions.oneUser, (state, {user}) => ({ 
        ...state,
        users: [...state.users, user],
        serial:  state.serial + 1,
        loading: false})),

        /**
 * Agrega los datos del usuario seleccionado
 * 
 */
    
    on(actions.selectUser, (state, {user , id}) => ({ 
        ...state,
        update: id,
        user: user
    })),

    /**
 * Actualiza la informacion del usuario 
 * 
 */

    on(actions.updateUser, (state, {user}) => ({ 
        ...state,
        user: user
    })),

    /**
 * Elimina el usuario enviando el ID
 * 
 */

    on(actions.deleteUser, (state, {id}) => ({ 
        ...state,
        users: [ ...state.users.filter( d => d.id != id  )]
    })),
    
    );

    export function usersReducer(
        state: State = initialState, action: Action){
            
        return _userReducer(state, action);
    }
    
 
