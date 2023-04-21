import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from "./view/login/login.component";
import { MyProfileComponent } from "./view/my-profile/my-profile.component";
import { redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
import { AdminComponent } from "./view/admin/admin.component";
import { IsAdminGuardGuard } from "./services/is-admin-guard.guard";
import { MyNftComponent } from "./view/my-nft/my-nft.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'my-nft',
    component: MyNftComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AngularFireAuthGuard, IsAdminGuardGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true }), CommonModule],
})
export class AppRoutingModule {}
