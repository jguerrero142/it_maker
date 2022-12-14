import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Request, Users } from '../models/';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private api: ApiService ) { }

  /**
 * Servicio que obtiene todos los usuarios
 * 
 */

  getUsers(){
    return this.api.get<Request>('users')
    .pipe(map(resp => {
      return resp.data.map(d => Users.usersJson(d))
    }))
  }

  /**
 * Servicio que crea los usuarios
 * 
 */

  createUsers(data: any){
    return this.api.post('users', data);
  }

/**
 * Servicio que actualiza los usuarios
 * 
 */
  updateUsers(id: number, data: any){
    return this.api.put(`users/${id}`, data);
  }

  
}
