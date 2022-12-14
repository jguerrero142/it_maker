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

  /**
 * Se Configura la api para request tipo Get
 * 
 */
  get<T>( url: string): Observable<T>{
        return this.http.get<T>(`${this.Url}/${url}`)
  }

  /**
 * Se Configura la api para request tipo Post
 * 
 */

  post<T>( url: string, data: T): Observable<T>{
    return this.http.post<T>(`${this.Url}/${url}`, data)
  }

  /**
 * Se Configura la api para request tipo Put
 * 
 */

  put<T, D>( url: string, data: D): Observable<T>{
    return this.http.put<T>(`${this.Url}/${url}`, data)
  }

  /**
 * Se Configura la api para request tipo Delete
 * 
 */

  delete<T>( url: string): Observable<T>{
    return this.http.delete<T>(`${this.Url}/${url}`)
  }
}
