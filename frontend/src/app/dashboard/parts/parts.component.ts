import { Component, OnInit } from '@angular/core';
import { Part } from '../../models/part.model';
import { PartsService } from './parts.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parts',
  imports: [NgFor],
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent implements OnInit {
  parts: Part[] = [];

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
}
