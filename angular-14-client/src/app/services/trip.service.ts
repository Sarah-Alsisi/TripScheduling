import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Trip} from "../models/trip.model";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${environment.tripsUrl}/get`);
  }

  get(id: any): Observable<Trip> {
    return this.http.get<Trip>(`${environment.tripsUrl}/get/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.tripsUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.tripsUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.tripsUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${environment.tripsUrl}/delete`);
  }

  findById(id: any): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${environment.tripsUrl}/get/${id}`);
  }

}
