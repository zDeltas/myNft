import { NgModule } from '@angular/core';
import { InputComponent } from './form/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe, NgIf } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkWithHref } from "@angular/router";
import { AccountComponent } from './header/account/account.component';
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [InputComponent, HeaderComponent, AccountComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    NgIf,
    MatIconModule,
    RouterLinkWithHref,
    MatButtonModule,
    AsyncPipe,
    RouterLink,
    MatMenuModule,
  ],
  exports: [InputComponent, HeaderComponent],
})
export class SharedModule {}
