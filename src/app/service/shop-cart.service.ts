import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Order {
  id?: number;
  userId: number;
  orderStatus?: string;
  orderCreatedAt?: Date;
  totalPrice?: number
}
@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private base_url:string  = 'http://localhost:1234/order';

  constructor(private http: HttpClient) { }

  // getProductToCart(orderStatus: String): Observable<any> {
  //   return this.http.get(`${this.base_url + '/find'}?orderStatus=${orderStatus}`);
  // }

}
