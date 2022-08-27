import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from './categories.service';

export interface Product {
  id: number;
  productName?: string;
  productPriceIn?: number;
  productPriceOut?: number;
  productImage?: string;
  productDescription?: string;
  productInformation?: string;
  discount?: number;
  productCreatedAt?: Date;
  rateProduct?: string;
  reviewProduct?: string;
  productStatus?: string;
  categoryId: number
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private base_url:string  = 'http://localhost:1234/product';
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.base_url);
  }

  getPaginationPro(pageNo: number = 1, pageSize: number = 8): Observable<any> {
    let endPointUrl = `${this.base_url + '/paginations'}?pageNo=${pageNo}&pageSize=${pageSize}`;
    return this.http.get(endPointUrl);
  }

  getProductByName(productName:string){
    return this.http.get(`${this.base_url + '/name'}/${productName}`);
  }

  getProductDetailsId(id:number){
    return this.http.get(`${this.base_url}/${id}`);
  }

  getReviewProduct(): Observable<any> {
    return this.http.get(`${this.base_url + '/reviewsProduct'}`);
  }
  getRateProduct(): Observable<any> {
    return this.http.get(`${this.base_url + '/rateProduct'}`);
  }
  getLatestProduct(): Observable<any> {
    return this.http.get(`${this.base_url + '/latestProduct'}`);
  }

  getProductByCate(categoryId:number){
    return this.http.get(`${this.base_url+ '/nameCate'}/${categoryId}`);
  }


}
