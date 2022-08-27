import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
  isLoading = false;

  constructor( public loginService: LoginService, private productService: ProductService) { }

  ngOnInit(): void {

  }
}
