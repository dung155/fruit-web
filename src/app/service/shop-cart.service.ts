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

  private base_url:string  = 'http://localhost:1234/orderDetail';

  constructor(private http: HttpClient) { }

  postProductToCart(product:any):Observable<any>{
    return this.http.post(`${this.base_url}`, {product});
  }

}
