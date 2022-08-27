import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, User } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ){}
  ngOnInit(): void {
    this.initForm();
  }

  jwt: string = '';
  submit() {
    console.log("subbbbbbbbbbbbb")
    console.log(this.formGroup.value);
    if(this.formGroup.valid){
      this.loginService.login(
        {userName: this.formGroup.controls.name.value,
        password: this.formGroup.controls.password.value
       }).subscribe(result=>{
        let token: String = result;
        console.log('token: ',token)
        localStorage.setItem('token', JSON.stringify(token));
        this.jwt = 'Bearer ' + token;
      })
    }

  }

  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }




}
