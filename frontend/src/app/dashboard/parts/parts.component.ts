import { Component, OnInit } from '@angular/core';
import { Part } from '../../models/part.model';
import { PartsService } from './parts.service';
import { NgFor } from '@angular/common';
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parts',
  imports: [NgFor, ButtonComponent, ModalComponent, InputComponent, FormsModule],
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


  constructor(private partsService: PartsService) { }

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
    console.log(`Adding part ${this.partName}`);
  }

  openAddPartModal() {
    this.isAddPartModalOpen = true;
  }

  closeAddPartModal() {
    this.isAddPartModalOpen = false;
  }
}
