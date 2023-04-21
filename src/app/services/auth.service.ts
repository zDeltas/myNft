import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = new BehaviorSubject<boolean>(false);
  public $isLoggedObservable = this.isLogged.asObservable();

  token: BehaviorSubject<string | null>;

  constructor(private afs: AngularFirestore) {
    this.token = new BehaviorSubject<string | null>(null);
  }

  register(newUser: User) {
    return new Promise<void>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(currentUser => {
          this.token.next(currentUser.user!.refreshToken);
          newUser.id = currentUser.user!.uid;
          this.isLogged.next(true);
          this.afs
            .collection('users')
            .doc(currentUser.user!.uid)
            .set(newUser.toPlainObject())
            .then(() => resolve());
        })
        .catch(err => {
          if (err.code === 'auth/email-already-in-use') {
            reject("L'adresse email est déjà utilisée.");
          }

          if (err.code === 'auth/invalid-email') {
            reject("L'adresse email est invalide.");
          }

          if (err.code === 'auth/weak-password') {
            reject('Le mot de passe est trop faible.');
          }

          reject('Une erreur est survenu');
        });
    });
  }

  login(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(currentUser => {
          this.token.next(currentUser.user!.refreshToken);
          this.isLogged.next(true);
          resolve();
        })
        .catch(reason => {
          if (reason.code === 'auth/invalid-email') {
            reject("L'adresse email est invalide.");
          }

          if (reason.code === 'auth/user-disabled') {
            reject("L'utilisateur a été banni.");
          }

          if (reason.code === 'auth/user-not-found') {
            reject("L'utilisateur n'existe pas.");
          }

          if (reason.code === 'auth/wrong-password') {
            reject('Le mot de passe est incorrect.');
          }

          reject('Une erreur est survenu');
        });
    });
  }
}
