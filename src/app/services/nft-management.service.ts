import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, ReplaySubject } from 'rxjs';
import { Nft } from '../models/nft.model';
import { EditNftModel } from '../models/edit-nft.model';

@Injectable({
  providedIn: 'root',
})
export class NftManagementService {
  nfts: ReplaySubject<Array<Nft>> = new ReplaySubject<Array<Nft>>();
  constructor(private afs: AngularFirestore) {}

  public getAllNft() {
    this.afs
      .collection('nft')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const nft = a.payload.doc.data() as Nft;
            nft.id = a.payload.doc.id;
            return nft;
          });
        })
      )
      .subscribe((nfts: Array<Nft>) => this.nfts!.next(nfts));
  }

  create(nft: Nft) {
    return new Promise<void>((resolve, reject) => {
      this.afs
        .collection('nft')
        .doc()
        .set(nft.toPlainObject())
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }

  edit(id: string, nft: EditNftModel) {
    return new Promise<void>((resolve, reject) => {
      this.afs
        .collection('nft')
        .doc(id)
        .update(nft)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }

  delete(id: string) {
    return new Promise<void>((resolve, reject) => {
      this.afs
        .collection('nft')
        .doc(id)
        .delete()
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }
}
