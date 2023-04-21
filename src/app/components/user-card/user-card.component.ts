import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() public user: User | undefined;
  @Input() public editable: boolean = false
  @Output() public editUserEvent: Subject<User> = new Subject<User>();
  @Output() public deleteUserEvent: Subject<User> = new Subject<User>();

  constructor() {}

  editUser(user: User) {
    this.editUserEvent.next(user);
  }

  deleteUser(user: User) {
    this.deleteUserEvent.next(user);
  }
}
