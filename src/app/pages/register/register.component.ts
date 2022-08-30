import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  addUser = this.fb.group({
    userName : ['', Validators.required],
    password : ['', Validators.required],
    phone : [''],
    address : [''],
    email : [''],
    valueId : ['']
  })
  submited: boolean = false;
  constructor(
    private http: HttpClient,
    private registerSevice: RegisterService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  get f(){
    return this.addUser.controls;
  }
  submit():any{
    console.log('asasd');

    this.submited = true;
    if(!this.addUser.valid){

      return false;
    }

    console.log(this.addUser.value);

    this.registerSevice.post(this.addUser.value).subscribe(res=>{

    }, (e) => {this.router.navigate(['/pages/login'])})

  }

}
