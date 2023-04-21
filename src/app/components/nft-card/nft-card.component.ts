import { Component, Input, Output } from '@angular/core';
import { Nft } from '../../models/nft.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss'],
})
export class NftCardComponent {
  @Input() public nft: Nft | undefined;

  @Output() public editNftEvent: Subject<Nft> = new Subject<Nft>();
  @Output() public deleteNftEvent: Subject<Nft> = new Subject<Nft>();
  @Output() public buyNftEvent: Subject<Nft> = new Subject<Nft>();
  @Input() editable: boolean = false;

  constructor() {
  }

  editNft(nft: Nft) {
    this.editNftEvent.next(nft);
  }

  deleteNft(nft: Nft) {
    this.deleteNftEvent.next(nft);
  }

  isOwned(): boolean {
    return this.nft?.owner == '' || !!this.nft?.owner;
  }

  buy(nft: Nft) {
    return this.buyNftEvent.next(nft);
  }
}
