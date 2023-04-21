import { NgModule } from '@angular/core';
import { InputComponent } from './form/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { AccountComponent } from './header/account/account.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditNftDialogComponent } from './edit-nft-dialog/edit-nft-dialog.component';
import { NftCardComponent } from './nft-card/nft-card.component';
import { MatCardModule } from "@angular/material/card";
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    AccountComponent,
    EditUserDialogComponent,
    EditNftDialogComponent,
    NftCardComponent,
    UserCardComponent,
  ],
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
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
  ],
  exports: [InputComponent, HeaderComponent, NftCardComponent, UserCardComponent],
})
export class SharedModule {}
