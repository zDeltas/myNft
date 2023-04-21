import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';
import { User } from '../../models/user.model';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  public currentUser: User | undefined;
  public isLoading: boolean = false;
  constructor(private afs: AngularFirestore, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getDoc();
  }

  private getDoc() {
    this.isLoading = true;
    let id = this.authService.currentUser?.uid;
    if (id) {
      this.afs
        .collection('users')
        .doc(this.authService.currentUser?.uid)
        .get()
        .subscribe((value: DocumentSnapshot<unknown>) => {
          this.isLoading = false;
          this.currentUser = value.data() as User;
        });
    } else {
      setTimeout(() => {
        this.getDoc();
      }, 1000);
    }
  }
}
