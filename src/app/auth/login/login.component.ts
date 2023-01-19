import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  isPasswordShown: boolean = false;
  constructor(
    private router: Router
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
    this.router.navigate(['/products'])
  }

}
