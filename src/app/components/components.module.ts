import { NgModule } from '@angular/core';
import { InputComponent } from './form/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [InputComponent],
  imports: [ReactiveFormsModule, MatInputModule, NgIf, MatIconModule],
  exports: [InputComponent],
})
export class SharedModule {}
