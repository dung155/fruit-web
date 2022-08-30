import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { Product, ProductService } from 'src/app/service/product.service';
import { cloneDeep } from 'lodash';
import { Order, ShopCartService } from 'src/app/service/shop-cart.service';
import { HttpClient } from '@angular/common/http';
import { ShopGridService } from 'src/app/service/shop-grid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // @Input() productItem: Product;

  banner = [
    {
      id: 1,
      name: 'FRUIT FRESH',
      img: 'assets/img/hero/banner.jpg',
    },
  ];
  shopGird: any[] = [];
  totalPagesDis = 0;
  renderPageDis: number[] = [];
  currentPageDis = 0;
  pageSizeDis = 3;

  khkajsd = 2;

  categories: any[] = [];
  products: any[] = [];
  totalPagesPro = 0;
  renderPagePro: number[] = [];
  currentPagePro = 0;
  pageSizePro = 8;

  totalPagesCate = 0;
  renderPageCate: number[] = [];
  currentPageCate = 0;
  pageSizeCate = 4;

  blogDetail: any;
  BlogService: any;

  blogs: any;

  reviewProduct: any;
  rateProduct: any;
  latestProduct: any;

  productbuy: any;

  currentCategoryId = 0;

  constructor(
    private categoryService: CategoriesService,
    private productService: ProductService,
    private router: Router,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private shopCartService: ShopCartService,
    private http: HttpClient,
    private shopGridService: ShopGridService,
  ) {}
  ngOnInit(): void {
    this.loadProduct();
    this.loadCategories();
    this.loadDiscout();

    this.blogService.getPaginationBlog(1, 3).subscribe((res) => {
      this.blogs = res.content;
    });

    this.loadReviewProduct();
    this.loadRateProduct();
    this.loadLatestProduct();
  }

  loadDiscout(pageDis?: number) {
    if (!pageDis) {
      pageDis = 1;
    }
    this.shopGridService
      .getPaginationDiscount(pageDis - 1, this.pageSizeDis)
      .subscribe((res) => {
        this.shopGird = res.content;
        this.totalPagesDis = res.totalPages;
        this.renderPageDis = this.rangeDis(this.totalPagesDis);
        console.log(res);
      });
  }

  rangeDis(value: number) {
    const result: number[] = [];
    for (let i = 0; i < value; i++) {
      result.push(i + 1);
    }
    return result;
  }

  changePageDis(pageDis: number) {
    this.loadDiscout(pageDis);
  }

  goDetails(product: any) {
    console.log(product);
    const param: NavigationExtras = {
      queryParams: {
        productId: product.id,
      },
    };
    this.router.navigate(['pages/shop-details'], param);
  }

  //Product
  loadProduct(pagePro?: number) {
    if (!pagePro) {
      pagePro = 1;
    }
    this.productService
      .getPaginationPro(pagePro - 1, this.pageSizePro)
      .subscribe((res) => {
        this.products = res.content;
        this.totalPagesPro = res.totalPages;
        this.renderPagePro = this.rangePro(this.totalPagesPro);
        console.log(res);
      });
  }

  filterProducts(categoryId: number) {
    this.currentCategoryId = categoryId;
    if (categoryId === 0) {
      this.loadProduct();
    } else {
      this.productService.getProductByCate(categoryId).subscribe((res: any) => {
        console.log('res', res);
        this.products = res;
      });
    }
  }
  rangePro(value: number) {
    const result: number[] = [];
    for (let i = 0; i < value; i++) {
      result.push(i + 1);
    }
    return result;
  }
  changePagePro(pagePro: number) {
    this.loadProduct(pagePro);
  }

  //Categories
  loadCategories(pageCate?: number) {
    if (!pageCate) {
      pageCate = 1;
    }
    this.categoryService
      .getPaginationCate(pageCate - 1, this.pageSizeCate)
      .subscribe((res) => {
        this.categories = res.content;
        this.totalPagesCate = res.totalPages;
        this.renderPageCate = this.rangeCate(this.totalPagesCate);
        console.log(res);
      });
  }
  rangeCate(value: number) {
    const result: number[] = [];
    for (let i = 0; i < value; i++) {
      result.push(i + 1);
    }
    return result;
  }
  changePageCate(pageCate: number) {
    this.loadCategories(pageCate);
  }

  goProductDetails(product: any) {
    console.log(product);
    const param: NavigationExtras = {
      queryParams: {
        productId: product.id,
      },
    };
    this.router.navigate(['pages/shop-details'], param);
  }

  goBlogDetails(blog: any) {
    console.log(blog);
    const param: NavigationExtras = {
      queryParams: {
        newsId: blog.id,
      },
    };
    this.router.navigate(['pages/blog-details'], param);
  }

  //ReviewProduct
  loadReviewProduct() {
    this.productService.getReviewProduct().subscribe((res) => {
      this.reviewProduct = res;
      console.log(res);
    });
  }

  loadRateProduct() {
    this.productService.getRateProduct().subscribe((res) => {
      this.rateProduct = res;
      console.log(res);
    });
  }

  loadLatestProduct() {
    this.productService.getLatestProduct().subscribe((res) => {
      this.latestProduct = res;
      console.log(res);
    });
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
