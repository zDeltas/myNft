import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { EditUserModel } from '../models/edit-user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersManagementService {
  users: ReplaySubject<Array<User>> = new ReplaySubject<Array<User>>();

  constructor(private afs: AngularFirestore) {
  }

  public getAllUsers() {
    this.afs
      .collection('users')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const users = a.payload.doc.data() as User;
            users.id = a.payload.doc.id;
            return users;
          });
        })
      )
      .subscribe((users: Array<User>) => this.users!.next(users));
  }

  edit(id: string, user: EditUserModel) {
    return new Promise<void>((resolve, reject) => {
      this.afs
        .collection('users')
        .doc(id)
        .update(user)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }

  delete(id: string) {
    return new Promise<void>((resolve, reject) => {
      this.afs
        .collection('users')
        .doc(id)
        .delete()
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }
}
