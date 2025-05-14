import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'ui-dropdown',
  imports: [NgIf, NgFor, ButtonComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() options: { label: string, value: any }[] = [];
  @Input() buttonText = 'Select';
  isOpen = false;
  selectedOption: { label: string, value: any } | null = null;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { label: string, value: any }) {
    this.selectedOption = option;
    this.isOpen = false;
    // You can emit an event here if needed
  }

  ngOnInit(): void {
    this.selectedOption = this.options[0];
  }
}

// ng g c shared/components/dropdown --skip-tests --prefix ui