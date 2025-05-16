import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'ui-modal',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

}
