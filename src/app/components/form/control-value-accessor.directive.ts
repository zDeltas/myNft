import { Directive, Input, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[appTestDir]',
})
export class ControlValueAccessorDirective implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  public formControlDirective!: FormControlDirective;
  public required = false;
  public formControl?: FormControl;

  @Input() set ctrl(form: AbstractControl) {
    this.formControl = form as FormControl;
    this.required = this.formControl.hasValidator(Validators.required);
  }

  @Input() public hideRequiredMark: boolean = false;

  constructor() {}

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.formControlDirective.valueAccessor?.setDisabledState) {
      this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor?.writeValue(obj);
  }

  hasError() {
    return !!this.formControl?.errors && this.formControl?.touched;
  }
}
