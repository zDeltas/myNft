import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditUserModelControls } from '../../models/edit-user.model';
import { User } from '../../models/user.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent {
  public editUserForm: FormGroup;
  public editUserFormControls: EditUserModelControls = {
    email: this.formBuilder.nonNullable.control<string>('', Validators.required),
    firstName: this.formBuilder.nonNullable.control<string>('', Validators.required),
    lastName: this.formBuilder.nonNullable.control<string>('', Validators.required),
    isAdmin: this.formBuilder.nonNullable.control<boolean>(false, Validators.required),
  };

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: User,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditUserDialogComponent>
  ) {
    this.editUserForm = this.formBuilder.group(this.editUserFormControls);

    if (data.id) {
      this.editUserForm.setValue({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        isAdmin: data.isAdmin,
      });
    }
  }

  save() {
    if (!this.editUserForm.valid) {
      return;
    }

    this.dialogRef.close(this.editUserForm.value);
  }
}
