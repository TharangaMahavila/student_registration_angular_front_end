import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Course} from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  saveNewCourse(name: string, duration: string): Observable<HttpResponse<any>> {
    const body = {
      name: name,
      duration: duration
    };
    return this.http.post<HttpResponse<any>>(`http://localhost:8080/api/v1/courses`, body,{
      observe: 'response'
    });
  }

  getAllCourses(): Observable<Array<Course>>{
    const token = sessionStorage.getItem('token');
    if (token === null){
      return throwError('Invalid token');
    }else {
      return this.http.get<Array<Course>>(`http://localhost:8080/api/v1/courses`,{
        headers: new HttpHeaders().append('Authorization', `Bearer ${token}`)
      });
    }
  }
}
