import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginModelControls } from '../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public alerts: string[] = [];

  public loginForm: FormGroup;
  public loginFormControls: LoginModelControls = {
    email: this.formBuilder.nonNullable.control<string>('', Validators.required),
    password: this.formBuilder.nonNullable.control<string>('', Validators.required),
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group(this.loginFormControls);
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    this.authService
      .login(this.loginFormControls.email.value, this.loginFormControls.password.value)
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch(reason => {
        this.alerts.push(reason);
      });
  }

  public removeAlert(index: number): void {
    this.alerts.splice(index, 1);
  }
}
