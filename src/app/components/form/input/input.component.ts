import { Component, Input } from '@angular/core';
import { ControlValueAccessorDirective } from '../control-value-accessor.directive';

@Component({
  selector: 'uic-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends ControlValueAccessorDirective {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() isRequired: boolean = true;

  @Input() type: string = 'text';
  @Input() show: boolean = true;

  constructor() {
    super();
  }
}
