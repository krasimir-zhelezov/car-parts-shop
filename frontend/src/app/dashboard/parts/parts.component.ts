import { Component, OnInit } from '@angular/core';
import { Part } from '../../models/part.model';
import { PartsService } from './parts.service';
import { NgFor } from '@angular/common';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../../shared/components/form/form.component';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
  selector: 'app-parts',
  imports: [NgFor, ButtonComponent, ModalComponent, InputComponent, FormsModule, FormComponent],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent implements OnInit {
  parts: Part[] = [];
  isAddPartModalOpen: boolean = false;
  
  partName: string = '';
  partCode: string = '';
  partCategory: string = '';
  //supportedCars: Car[];
  partBuyPrice: number = 0;
  partSellPrice: number = 0;


  constructor(private partsService: PartsService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadParts();
  }

  private loadParts(): void {
    this.partsService.getAllParts().subscribe({
      next: (parts) => {
        this.parts = parts;
      }
    })
  }

  addPart(): void {
    const part: Part = {
      name: this.partName,
      code: this.partCode,
      category: this.partCategory,
      buyPrice: this.partBuyPrice,
      sellPrice: this.partSellPrice
    }

    this.partsService.addPart(part).subscribe({
      next: () => {
        this.alertService.addAlert({
          type: 'success',
          message: 'Part added succesfully.',
          duration: 5000
        })
      }
    });
  }

  openAddPartModal() {
    this.isAddPartModalOpen = true;
  }

  closeAddPartModal() {
    this.isAddPartModalOpen = false;
  }
}
