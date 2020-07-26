import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isAuth: boolean;
  constructor(private formBuilder: FormBuilder, private userServices: InscriptionService, private router: Router) { }

  ngOnInit() {
    this.initialForm();
    this.isAuth = this.userServices.isAuth;
  }

  initialForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignOut() {
    this.userServices.isAuth = false;
    this.isAuth = this.userServices.isAuth;
    window.location.reload(false);
    localStorage.removeItem('id');
  }

  onLogin() {
    const formValue = this.loginForm.value;
    this.userServices.login(formValue['email'], formValue['password']).subscribe((value) => {
      localStorage.setItem('id', value);
      this.userServices.isAuth = true;
      this.isAuth = this.userServices.isAuth;
      this.router.navigate(['/userlist']);
    }, (error) => {
      console.log(error);
      localStorage.removeItem('id');
      this.userServices.isAuth = false;
      this.isAuth = this.userServices.isAuth;
    });
  }

}
