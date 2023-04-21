import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NftManagementService } from '../../services/nft-management.service';
import { Nft } from '../../models/nft.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isLoading: boolean = false;
  public nftArray: Nft[] | undefined;

  constructor(
    private dialog: MatDialog,
    private nftManagementService: NftManagementService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.nftManagementService.nfts.subscribe(value => {
      this.nftArray = value;
      this.isLoading = false;
    });

    this.nftManagementService.getAllNft();
    console.log(this.nftArray);
  }

  buyNft($event: Nft) {
    if (this.authService.currentUser?.uid) {
      this.nftManagementService.buy($event.id, this.authService.currentUser?.uid);
    }
  }
}
