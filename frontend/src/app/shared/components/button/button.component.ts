import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() name: string = '';
  @Output() click: EventEmitter<any> = new EventEmitter();

  onClick() {
    this.click.emit();
  }
}
