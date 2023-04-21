import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditNftModel, EditNftModelControls } from '../../models/edit-nft.model';

@Component({
  selector: 'app-edit-nft-dialog',
  templateUrl: './edit-nft-dialog.component.html',
  styleUrls: ['./edit-nft-dialog.component.scss'],
})
export class EditNftDialogComponent {
  public title: string = 'Créer';

  public editNftForm: FormGroup;
  public editNftFormControls: EditNftModelControls = {
    name: this.formBuilder.nonNullable.control<string>('', Validators.required),
    value: this.formBuilder.nonNullable.control<string>('', Validators.required),
    imgUrl: this.formBuilder.nonNullable.control<string>('', Validators.required),
    rarity: this.formBuilder.nonNullable.control<string>('', Validators.required),
  };

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: EditNftModel,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditNftDialogComponent>
  ) {
    this.editNftForm = this.formBuilder.group(this.editNftFormControls);

    console.log(data);
    if (data) {
      this.title = 'Editer';
      this.editNftForm.setValue({
        name: data.name,
        value: data.value,
        imgUrl: data.imgUrl,
        rarity: data.rarity,
      });
    }
  }

  save() {
    if (!this.editNftForm.valid) {
      return;
    }

    this.dialogRef.close(this.editNftForm.value);
  }
}
