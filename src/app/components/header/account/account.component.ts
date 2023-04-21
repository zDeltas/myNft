import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor(private router: Router, public authService: AuthService) {
  }

  logout() {
    this.authService.logout().then(() => this.router.navigate(['']));
  }

  profile() {
    this.router.navigate(['my-profile']);
  }
}
