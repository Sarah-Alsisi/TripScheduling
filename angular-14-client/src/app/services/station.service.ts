import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../models/station.model';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Station[]> {return this.http.get<Station[]>(`${environment.stationUrl}/get`);
  }

  get(id: any): Observable<Station> {
    return this.http.get<Station>(`${environment.stationUrl}/get/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${environment.stationUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.stationUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.stationUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${environment.stationUrl}/delete`);
  }

  findById(id: any): Observable<Station[]> {
    return this.http.get<Station[]>(`${environment.stationUrl}/get/${id}`);
  }

}
