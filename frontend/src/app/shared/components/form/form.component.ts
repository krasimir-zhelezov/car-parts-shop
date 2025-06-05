import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'ui-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() ngSubmit = new EventEmitter<void>();

  onSubmit(event: Event) {
    // event.preventDefault();
    this.ngSubmit.emit();
  }
}
