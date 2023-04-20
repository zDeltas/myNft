import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {RegisterModelControls} from "../../models/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public registerFormControls: RegisterModelControls = {
    email: this.formBuilder.nonNullable.control<string>('', Validators.required),
    password: this.formBuilder.nonNullable.control<string>('', Validators.required),
    firstName: this.formBuilder.nonNullable.control<string>('', Validators.required),
    lastName: this.formBuilder.nonNullable.control<string>('', Validators.required),
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group(this.registerFormControls);
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.register(this.registerForm.value).then(() => {
      console.log("success");
    }).catch(reason => {
      console.log("err", reason);
    })
  }
}
