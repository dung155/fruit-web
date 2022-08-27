import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User{
  id: number;
  userName?: string;
  password?: string;
  phone?: string;
  address?: string;
  email?: string;
  userCreatedAt?: string;
  valueId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private base_url:string  = `http://localhost:1234/userDetail`;
  constructor(private http: HttpClient,private router: Router) {
  }

  login(data:any):Observable<any>{
    return this.http.post(`http://localhost:1234/userDetail/api/token`,data, {responseType: 'text'});
  }

  getToken(){
    if(localStorage.getItem('token')){
      return JSON.parse(localStorage.getItem('token')as string)
    }else{
      return null;
    }
  }

  get(): Observable<any> {
    return this.http.get(this.base_url);
  }}
