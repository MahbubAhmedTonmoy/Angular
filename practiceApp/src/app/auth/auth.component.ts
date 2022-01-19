import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode : boolean = false;
  currentPage : string  = '';
  signupForm: FormGroup = new FormGroup({}) ;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentPage = this.router.url;
    if(this.currentPage === '/login'){
      this.isLoginMode = true;
    }
    this.initForm();
  }

  private initForm(){
    let email = '';
    let password = '';
    this.signupForm = new FormGroup({
      email : new FormControl(email, Validators.required),
      password : new FormControl(password, Validators.required)
    })
    
    console.log(this.signupForm.value);
  }
  onSubmit(){
    console.log(this.signupForm.value);
    debugger
    if(this.isLoginMode){
      this.authService.LogIn(this.signupForm.value.email, this.signupForm.value.password)
      .subscribe(response=>{
        console.log(response);
      },
      error =>{
        console.log(error);
      });
    }
    else{
      this.authService.signUp(this.signupForm.value.email, this.signupForm.value.password)
      .subscribe(response=>{
        console.log(response);
      },
      error =>{
        console.log(error);
      });
    }
  }
}
