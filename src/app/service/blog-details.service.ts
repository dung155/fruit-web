import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {

  constructor(private http: HttpClient) { }

  getApi(url: string):Observable<any>{
    return this.http.get(url);
  }
  getall(): Observable<any>{
    return this.http.get('http://localhost:1234/blogDetail');
  }}
