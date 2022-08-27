import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  banner=[
    {
      id:1,
      img:'assets/img/breadcrumb.jpg'
    }
]
  productDetail:any;
  latestProduct:any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private http: HttpClient,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param =>{
      console.log(param.productId);
      if(param.productId){
        this.productService.getProductDetailsId(+param.productId).subscribe(res =>{
          console.log(res);
          this.productDetail=res;
        });
      }
    }) ;
    this.loadLatestProduct();
  }

  goProductDetails(product:any){
    console.log(product);
    const param:NavigationExtras = {
        queryParams:{
          productId: product.id
        }
    };
    this.router.navigate(['pages/shop-details'], param);
  }

  loadLatestProduct() {
    this.productService.getLatestProduct().subscribe(res => {
      this.latestProduct = res;
      console.log(res);
    })
  }
  async buy(e: any, product: Product) {
    e.stopPropagation();
    console.log('product: ', product);
    const body = {productId: product.id, quantity: 1}
    const dataOrder: any = await this.http
        .post('http://localhost:1234/orderDetail', body)
        .toPromise();
      console.log('dataOrder:', dataOrder);

  }


}
