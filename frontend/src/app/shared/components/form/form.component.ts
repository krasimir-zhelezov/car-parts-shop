import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() ngSubmit = new EventEmitter<void>();

  onSubmit() {
    this.ngSubmit.emit();
  }
}
