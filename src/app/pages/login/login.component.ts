import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProviderService } from 'src/app/auth/auth-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hideLoginError: Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authProvider: AuthProviderService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['test@termsheet.com', Validators.required],
      password: ['test1234!@#$', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      if (this.authProvider.authenticate(this.loginForm.value)) {
        this.hideLoginError = true;
        this.router.navigate(['/dashboard']);
      }
      else {
        this.hideLoginError = false;
      }
    }
  }
}
