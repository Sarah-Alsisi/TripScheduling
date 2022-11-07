import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trip} from "../models/trip.model";

const baseUrl = 'http://localhost:8080/api/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${baseUrl}/get`);
  }

  get(id: any): Observable<Trip> {
    return this.http.get<Trip>(`${baseUrl}/get/${id}`);
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

  findById(id: any): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${baseUrl}/get/${id}`);
  }

}
