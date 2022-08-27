import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './service/categories.service';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
  }

  constructor( public loginService: LoginService){

  }


  ngOnInit(): void {
  }


}
