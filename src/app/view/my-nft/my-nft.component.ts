import { Component, OnInit } from '@angular/core';
import { NftManagementService } from '../../services/nft-management.service';
import { Nft } from '../../models/nft.model';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-nft',
  templateUrl: './my-nft.component.html',
  styleUrls: ['./my-nft.component.scss'],
})
export class MyNftComponent implements OnInit {
  public isLoading: boolean = false;
  public nftArray: Nft[] | undefined;

  constructor(
    private dialog: MatDialog,
    private nftManagementService: NftManagementService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.nftManagementService.nfts.subscribe(value => {
      this.nftArray = value.filter(value1 => value1.owner == this.authService.currentUser?.uid);
      this.isLoading = false;
    });

    this.nftManagementService.getAllNft();
  }

  sell($event: Nft) {
    if (this.authService.currentUser?.uid) {
      this.nftManagementService.sell($event.id);
    }
  }
}
