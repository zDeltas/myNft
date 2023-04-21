import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterModelControls } from '../../models/register.model';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public alerts: string[] = [];

  public registerForm: FormGroup;
  public registerFormControls: RegisterModelControls = {
    email: this.formBuilder.nonNullable.control<string>('', Validators.required),
    password: this.formBuilder.nonNullable.control<string>('', Validators.required),
    firstName: this.formBuilder.nonNullable.control<string>('', Validators.required),
    lastName: this.formBuilder.nonNullable.control<string>('', Validators.required),
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group(this.registerFormControls);
  }

  submit() {
    if (!this.registerForm.valid) {
      return;
    }

    const user = new User(
      this.registerFormControls.email.value,
      this.registerFormControls.password.value,
      this.registerFormControls.firstName.value,
      this.registerFormControls.lastName.value,
      false,
      200000
    );

    this.authService
      .register(user)
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
