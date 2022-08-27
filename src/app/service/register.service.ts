import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private base_url:string  = 'http://localhost:1234/userDetail';
  constructor(private http: HttpClient) { }

  post(data:any): Observable<any>{
    return this.http.post(`${this.base_url + '/register'}`, data);
  }

}
