import { NgModule } from '@angular/core';
import { InputComponent } from './form/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { RouterLinkWithHref } from "@angular/router";

@NgModule({
  declarations: [InputComponent, HeaderComponent],
  imports: [ReactiveFormsModule, MatInputModule, NgIf, MatIconModule, RouterLinkWithHref],
  exports: [InputComponent, HeaderComponent],
})
export class SharedModule {}
