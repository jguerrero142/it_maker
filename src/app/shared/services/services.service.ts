import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Request, Users } from '../models/';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private api: ApiService ) { }


  getUsers(){
    return this.api.get<Request>('users')
    .pipe(map(resp => {
      return resp.data.map(d => Users.usersJson(d))
    }))
  }

  createUsers(data: any){
    return this.api.post('users', data);
  }


  updateUsers(id: number, data: any){
    return this.api.put(`users/${id}`, data);
  }

  
}
