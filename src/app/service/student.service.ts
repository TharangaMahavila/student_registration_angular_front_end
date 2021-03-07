import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Student} from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Array<Student>>{
    const token = sessionStorage.getItem('token');
    if (token === null){
      return throwError('Invalid token');
    } else {
      return this.http.get<Array<Student>>(`http://localhost:8080/api/v1/students`,{
        headers: new HttpHeaders().append('Authorization', `Bearer ${token}`)
      });
    }
  }


}
