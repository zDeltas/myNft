import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

    // this.nft = [{
    //   _id: 1,
    //   _imgUrl: 'https://example.com/nft-car-1.jpg',
    //   _value: 100000,
    //   _nom: 'CryptoPorsche #001',
    //   _rarity: 'Rare'
    // },
    //   {
    //     _id: 2,
    //     _imgUrl: 'https://example.com/nft-car-2.jpg',
    //     _value: 200000,
    //     _nom: 'CryptoLambo #001',
    //     _rarity: 'Unique'
    //   },
    //   {
    //     _id: 3,
    //     _imgUrl: 'https://example.com/nft-car-3.jpg',
    //     _value: 50000,
    //     _nom: 'CryptoBugatti #001',
    //     _rarity: 'Legendary'
    //   },
    //   {
    //     _id: 4,
    //     _imgUrl: 'https://example.com/nft-car-4.jpg',
    //     _value: 250000,
    //     _nom: 'CryptoFerrari #001',
    //     _rarity: 'Epic'
    //   },
    //   {
    //     _id: 5,
    //     _imgUrl: 'https://example.com/nft-car-5.jpg',
    //     _value: 150000,
    //     _nom: 'CryptoMcLaren #001',
    //     _rarity: 'Rare'
    //   }]
  }
}
