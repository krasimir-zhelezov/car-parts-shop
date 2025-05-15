import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() input: EventEmitter<any> = new EventEmitter();

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
    this.input.emit();
  }
}