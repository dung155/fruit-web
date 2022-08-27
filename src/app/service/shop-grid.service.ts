import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopGridService {

  private base_url:string  = 'http://localhost:1234/product';
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.base_url);
  }
  getPaginationDiscount(pageNo: number = 1, pageSize: number = 3): Observable<any> {
    const endPointUrl = `${this.base_url +'/discount'}?pageNo=${pageNo}&pageSize=${pageSize}`
    return this.http.get(endPointUrl);
  }





}
