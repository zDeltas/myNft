import { Component, OnInit } from '@angular/core';
import { UsersManagementService } from '../../services/users-management.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../../components/edit-user-dialog/edit-user-dialog.component';
import { Nft } from '../../models/nft.model';
import { EditNftDialogComponent } from '../../components/edit-nft-dialog/edit-nft-dialog.component';
import { NftManagementService } from '../../services/nft-management.service';
import { EditNftModel, EditNftModelControls } from "../../models/edit-nft.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public isLoading: boolean = false;
  public users: User[] | undefined;
  public nftArray: Nft[] | undefined;

  constructor(
    private dialog: MatDialog,
    private usersManagementService: UsersManagementService,
    private nftManagementService: NftManagementService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.usersManagementService.users.subscribe(value => {
      this.users = value;
      this.isLoading = false;
    });

    this.nftManagementService.nfts.subscribe(value => {
      this.nftArray = value;
      this.isLoading = false;
    });

    this.usersManagementService.getAllUsers();
    this.nftManagementService.getAllNft();
  }

  editUser(user: User) {
    this.dialog
      .open(EditUserDialogComponent, {
        data: user,
      })
      .afterClosed()
      .pipe()
      .subscribe(value => {
        if (value) {
          this.usersManagementService.edit(user.id, value);
        }
      });
  }

  deleteUser(user: User) {
    this.usersManagementService.delete(user.id);
  }

  createNft() {
    this.dialog
      .open(EditNftDialogComponent)
      .afterClosed()
      .pipe()
      .subscribe((value: EditNftModel) => {
        if (value) {
          const nft = new Nft(value.name, value.value, value.rarity, value.imgUrl, '');
          this.nftManagementService.create(nft);
        }
      });
  }

  editNft(nft: Nft) {
    this.dialog
      .open(EditNftDialogComponent, {
        data: nft,
      })
      .afterClosed()
      .pipe()
      .subscribe(value => {
        if (value) {
          this.nftManagementService.edit(nft.id, value);
        }
      });
  }

  deleteNft(nft: Nft) {
    this.nftManagementService.delete(nft.id);
  }

}
