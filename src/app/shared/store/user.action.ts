import { createAction, props } from '@ngrx/store';
import { Users } from '../models';

/**
 * Actions que manejan el loading de la aplicacion
 * 
 */
export const loadingUser = createAction('[]loading');

export const loadingSucces = createAction('[]loading Succes',
props<{ serial: number }>() 
);

/**
 * Actions modifican los datos del estado
 * 
 */
export const cargarUser = createAction('[]loading Users',
props<{ users: Users[] }>()                            
);
/**
 * Action carga un usuario al estado
 * 
 */
export const oneUser = createAction('[]loading oneUser',
props<{ user: Users }>()                            
);

/**
 * Action selecciona el usuario a editar
 * 
 */
export const selectUser = createAction('[]select Users',
props<{ id: number }>()                            
);

/**
 * Action actualiza el usuario seleccionado
 * 
 */
export const updateUser = createAction('[]update Users',
props<{ user: Users }>()                            
);

/**
 * Action que elimina el usuario enviando por ID
 * 
 */
export const deleteUser = createAction('[]delete Users',
props<{ id: number}>()                            
);
