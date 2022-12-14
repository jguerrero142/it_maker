import { createAction, props } from '@ngrx/store';
import { Users } from '../models';


export const loadingUser = createAction('[]loading');

export const loadingSucces = createAction('[]loading Succes',
props<{ serial: number }>() 
);

export const cargarUser = createAction('[]loading Users',
props<{ users: Users[] }>()                            
);

export const oneUser = createAction('[]loading oneUser',
props<{ user: Users }>()                            
);

export const selectUser = createAction('[]select Users',
props<{ id: number }>()                            
);

export const updateUser = createAction('[]update Users',
props<{ user: Users }>()                            
);

export const deleteUser = createAction('[]delete Users',
props<{ id: number}>()                            
);
