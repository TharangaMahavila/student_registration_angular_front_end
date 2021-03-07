import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticate(uname: string, pwd: string): Observable<any>{
    const body ={
      username: uname,
      password: pwd
    };
    return this.http.post(`http://localhost:8080/api/v1/authenticate`, body, {
      responseType: 'text'
    });
  }
}
