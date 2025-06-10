import { Component, OnInit, ViewChild } from '@angular/core';
import { Part } from '../../models/part.model';
import { PartsService } from './parts.service';
import { NgFor } from '@angular/common';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../../shared/components/form/form.component';
import { AlertService } from '../../shared/components/alert/alert.service';
import { DropdownComponent } from "../../shared/components/dropdown/dropdown.component";
import { CarSelectComponent } from "../../shared/components/car-select/car-select.component";
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-parts',
  imports: [NgFor, ButtonComponent, ModalComponent, InputComponent, FormsModule, FormComponent, DropdownComponent, CarSelectComponent],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent implements OnInit {
  @ViewChild(CarSelectComponent) carSelectComponent!: CarSelectComponent;

  parts: Part[] = [];
  isPartModalOpen: boolean = false;
  isEditingPart: boolean = false;
  
  partId: string = '';
  partName: string = '';
  partCode: string = '';
  partCategory: string = '';
  supportedCars: Car[] = [];
  partBuyPrice: number = 0;
  partSellPrice: number = 0;

  partCategories = [
    { label: 'Engine', value: 'ENGINE' },
    { label: 'Tires', value: 'TIRES' },
    { label: 'Exhaust', value: 'EXHAUST' },
    { label: 'Suspension', value: 'SUSPENSION' },
    { label: 'Brakes', value: 'BRAKES' }
  ];

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

  private reloadPage(): void {
    window.location.reload();
  }

  savePart(): void {
    // console.log(this.partCategory)
    const part: Part = {
      name: this.partName,
      code: this.partCode,
      category: this.partCategory,
      buyPrice: this.partBuyPrice,
      sellPrice: this.partSellPrice
    }

    console.log(this.isEditingPart);

    if (!this.isEditingPart) {
      this.partsService.addPart(part).subscribe({
        next: () => {
          this.alertService.addAlert({
            type: 'success',
            message: 'Part added succesfully.',
            duration: 5000
          })
        }
      });
    } else {
      part.id = this.partId;
      console.log("Part is Edited")
      this.partsService.editPart(part).subscribe({
        next: () => {
          this.alertService.addAlert({
            type: "success",
            message: "Part edited successfully",
            duration: 5000
          })
        }
      })
    }
  }

  deletePart(partId: string): void {
    this.partsService.deletePart(partId).subscribe({
      next: () => {
        this.alertService.addAlert({
          type: 'success',
          message: 'part deleted successfully',
          duration: 5000
        })
      }
    })

    this.reloadPage();
  }

  openAddPartModal() {
    this.isPartModalOpen = true;
  }

  closePartModal() {
    this.isPartModalOpen = false;
    this.isEditingPart = false;

    this.partId = '';
    this.partName = '';
    this.partCode = '';
    this.partCategory = '';
    //supportedCars: Car[];
    this.partBuyPrice = 0;
    this.partSellPrice = 0;
  }

  openEditPartModal(partId: string): void {
    this.partsService.getPartById(partId).subscribe({
      next: (part) => {
        this.partId = part.id ?? '';
        this.partName = part.name;
        this.partCode = part.code;
        this.partCategory = part.category;
        this.partBuyPrice = part.buyPrice;
        this.partSellPrice = part.sellPrice;

      }
    })

    this.carSelectComponent.partId = partId;
    this.carSelectComponent.loadPart();

    this.isPartModalOpen = true;
    this.isEditingPart = true;

    console.log("Open Edit Part Modal " + this.isEditingPart);
  }
}
