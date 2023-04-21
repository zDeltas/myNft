import { Component, OnInit } from '@angular/core';
import { UsersManagementService } from '../../services/users-management.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../../components/edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public isLoading: boolean = false;
  public users: User[] | undefined;

  constructor(private dialog: MatDialog, private usersManagementService: UsersManagementService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.usersManagementService.users.subscribe(value => {
      this.users = value;
      this.isLoading = false;
    });

    this.usersManagementService.getAllUsers();
  }

  editUser(user: User) {
    this.dialog
      .open(EditUserDialogComponent, {
        data: user,
      })
      .afterClosed()
      .pipe()
      .subscribe(value => {
        if(value) {
          this.usersManagementService.edit(user.id, value);
        }
      });
  }

  deleteUser(user: User) {
    this.usersManagementService.delete(user.id);
  }
}
