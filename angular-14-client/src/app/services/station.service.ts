import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../models/station.model';
import {environment} from "../../environments/environment";

const baseUrl = 'http://localhost:'+environment.apiUrl+'/api/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Station[]> {
    return this.http.get<Station[]>(`${baseUrl}/get`);
  }

  get(id: any): Observable<Station> {
    return this.http.get<Station>(`${baseUrl}/get/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${baseUrl}/delete`);
  }

  findById(id: any): Observable<Station[]> {
    return this.http.get<Station[]>(`${baseUrl}/get/${id}`);
  }

}
