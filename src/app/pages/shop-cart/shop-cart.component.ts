import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit{
  banner=[
    {
      id:1,

      img:'assets/img/breadcrumb.jpg'
    }
]
productCart:any;
order: any;
orderDetails: any;
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.loadCart();
    // console.log(this.loadCart);
  }
  async loadCart(){
      const dataOrder: any = await this.http
      .get(`http://localhost:1234/order/find?orderStatus=${'WAITING'}`)
      .toPromise();
      this.order = dataOrder[0];
      this.orderDetails = this.order.orderDetails;
      console.log('getOrder: ', this.order, dataOrder);

      // this.orderDetails = await this.http
      // .get(`http://localhost:1234/orderDetail/${this.order.id}`)
      // .toPromise();
      // console.log('orderDetail: ', this.orderDetails);

  }


}
