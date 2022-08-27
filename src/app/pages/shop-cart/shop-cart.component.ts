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
      this.order = await this.http
      .get(`http://localhost:1234/order/find?orderStatus=${"WAITING"}`)
      .toPromise();
      console.log('getOrder: ', this.order);

      this.orderDetails = await this.http
      .get(`http://localhost:1234/orderDetail/${this.order.id}`)
      .toPromise();
      console.log('orderDetail: ', this.orderDetails);

    this.productCart = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') || '{}') :[] ;
      console.log(this.productCart);
  }

  updateCart(){
    localStorage.setItem('carts', JSON.stringify(this.productCart));
  }

  deleteCart(index:number){
    this.productCart.splice(index, 1);
    localStorage.setItem('carts', JSON.stringify(this.productCart));

  }

  checkout(){
    const newOrder = {
      products: JSON.stringify(this.productCart),
      totalPrice: 0,
      userId: 0
    }

  }

}
