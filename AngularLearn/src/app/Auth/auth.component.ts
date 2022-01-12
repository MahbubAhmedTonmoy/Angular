import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
    selector : 'app-auth',
    templateUrl: './auth.component.html' 
}) 

export class AuthComponent{
    isLoginMode = true;

    constructor(private authService: AuthService,
        private router: Router){}
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm){
        console.log(form.value);

        if(this.isLoginMode){
            this.authService.LogIn(form.value.email, form.value.password)
            .subscribe(resData => {
                console.log(resData);
                this.router.navigate(['/recipes']);
            },
            error =>{
                console.log(error);
                this.router.navigate(['/auth']);
            });
        }
        else {
            this.authService.signUp(form.value.email, form.value.password)
            .subscribe(resData => {
                console.log(resData);
                this.router.navigate(['/recipes']);
            },
            error =>{
                console.log(error);
            });
        }
        form.reset();
    }
}