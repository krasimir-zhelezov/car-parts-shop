import { NgFor, NgIf } from '@angular/common';
import { Component, forwardRef, HostListener, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'ui-dropdown',
  imports: [NgIf, NgFor, ButtonComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() options: { label: string, value: any }[] = [];
  @Input() buttonText = 'Select';
  isOpen = false;
  selectedOption: { label: string, value: any } | null = null;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;

  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this.selectedOption = this.options.find(opt => opt.value == value) || null; // Note == instead of === for loose comparison
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { label: string, value: any }) {
    this.selectedOption = option;
    this.onChange(option.value);
    this.onTouched();
    this.isOpen = false;
  }

  ngOnInit(): void {
    this.selectedOption = this.options[0];
  }

  ngOnChanges(): void {
    if (this.options && this.options.length > 0 && !this.selectedOption) {
      this.selectedOption = this.options[0];
    }
  }
}

// ng g c shared/components/dropdown --skip-tests --prefix ui