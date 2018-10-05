

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = '/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(apiUrl, httpOptions);
  }

  postUser(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions);
  }

  deleteUser(id): Observable<any> {
    const deleteUrl = apiUrl + '/' + 'id';
    console.log(deleteUrl);
    return this.http.delete(deleteUrl, httpOptions);
  }
}
