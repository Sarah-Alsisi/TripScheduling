import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.usersUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get(`${environment.usersUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.usersUrl}/sign_up`, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${environment.usersUrl}/login`, data);
  }

}
