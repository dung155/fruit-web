import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  banner=[
    {
      id:1,
      img:'assets/img/breadcrumb.jpg'
    }
]
  productCart:any;
  constructor() { }

  ngOnInit(): void {
  }


}
