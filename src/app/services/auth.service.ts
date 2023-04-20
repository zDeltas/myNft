import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import firebase from "firebase/compat/app";
import {BehaviorSubject} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string | null>;

  constructor(private afs: AngularFirestore) {
    this.token = new BehaviorSubject<string | null>(null);
  }

  register(newUser: User) {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((currentUser) => {
        this.token.next(currentUser.user!.refreshToken);
        newUser.id = currentUser.user!.uid;

        this.afs.collection('users').doc(currentUser.user!.uid).set(newUser.toPlainObject()).then(() => resolve());
      })
        .catch((err) => {
          console.log("err auth", err);
          reject("Une erreur est survenu");
        })
    })
  }
}
