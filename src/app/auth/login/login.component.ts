import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  isPasswordShown: boolean = false;
  user: any = {};
  showToast: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signinForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(){
    const {email, password} = this.signinForm.value;
    this.authService.login().subscribe(
      (res: any)=>{
        this.user = res['accounts'].find((el: any)=> el.email === email && el.password === password);
        if(this.user){
          this.router.navigate(['/products'])
        }else{
          this.showToast = true;
          throw new HttpErrorResponse({status: 401, error: 'Un Authorized', statusText: "Un Authorized"});
        }
      }
    )
  }

}
