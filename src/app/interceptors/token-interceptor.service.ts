import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('this.intercept:', this.intercept);
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization: `Bearer ${this.loginService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }

}
