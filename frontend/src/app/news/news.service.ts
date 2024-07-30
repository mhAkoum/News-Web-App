import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews(): Observable<any[]> {
    const apiUrl = 'http://127.0.0.1:8080/api/news';
    return this.http.get<any[]>(apiUrl);
  }
}
