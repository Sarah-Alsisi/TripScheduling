import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {environment} from "../../environments/environment";

const baseUrl = 'http://localhost:'+environment.apiUrl+'/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/sign_up`, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${baseUrl}/login`, data);
  }

}
