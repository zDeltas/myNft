import {NgModule} from '@angular/core';
import {InputComponent} from "./form/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    NgIf
  ],
  exports: [
    InputComponent
  ],
})
export class SharedModule {
}
