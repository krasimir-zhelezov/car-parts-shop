import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  imports: [NgClass],
  styles: []
})
export class ButtonComponent {
  @Input() name: string = '';
  @Input() type: string = 'button';
  @Input() color: string = 'blue';
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}