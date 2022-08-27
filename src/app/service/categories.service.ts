import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private base_url:string  = 'http://localhost:1234/categories';
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.base_url);
  }
  getPaginationCate(pageNo: number = 1, pageSize: number = 4): Observable<any> {
    const endPointUrl = `${this.base_url + '/paginations'}?pageNo=${pageNo}&pageSize=${pageSize}`
    return this.http.get(endPointUrl);
  }



}
