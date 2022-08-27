import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: PagesComponent,
  children: [
    {path: 'home', component: HomeComponent },
    {path: 'blog', component: BlogComponent },
    {path: 'blog-details', component: BlogDetailsComponent },
    {path: 'checkout', component: CheckoutComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'shop-cart', component: ShopCartComponent },
    {path: 'shop-details', component: ShopDetailsComponent },
    {path: 'login',component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
  ]}
];

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    BlogDetailsComponent,
    BlogComponent,
    CheckoutComponent,
    ContactComponent,
    ShopDetailsComponent,
    ShopCartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ]
})
export class PagesModule { }
