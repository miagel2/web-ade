import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmploisDuTemps} from '../models/entrie'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';



  constructor(private http: HttpClient) {}

  // Example method for creating an entry
  createEntry(data: any): Observable<EmploisDuTemps> {
    return this.http.post<EmploisDuTemps>(`${this.apiUrl}/create`, data);
  }

  // Example method for getting all entries
  getAllEntries(): Observable<EmploisDuTemps[]> {
    return this.http.get<EmploisDuTemps[]>(`${this.apiUrl}/get_all`);
  }
  // Example method for getting an entry by ID
  getEntryById(id: number): Observable<EmploisDuTemps> {
    return this.http.get<EmploisDuTemps>(`${this.apiUrl}/get/${id}`);
  }

  // Example method for inserting data from a local CSV file
  insertLocalCSV(): Observable<EmploisDuTemps> {
    return this.http.get<EmploisDuTemps>(`${this.apiUrl}/insert_local_csv`);
  }
}
