import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Url = environment.Url

  constructor( private http: HttpClient ) { }

  get<T>( url: string): Observable<T>{
        return this.http.get<T>(`${this.Url}/${url}`)
  }

  post<T>( url: string, data: T): Observable<T>{
    return this.http.post<T>(`${this.Url}/${url}`, data)
  }

  put<T, D>( url: string, data: D): Observable<T>{
    return this.http.put<T>(`${this.Url}/${url}`, data)
  }

  delete<T>( url: string): Observable<T>{
    return this.http.delete<T>(`${this.Url}/${url}`)
  }
}
