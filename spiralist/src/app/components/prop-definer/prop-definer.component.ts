import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { Algorithms } from '../../models/algorithms';
import AlgoTypes from '../../assets/algos.json'
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'prop-definer',
  imports: [CommonModule, MatSelectModule, MatSliderModule, MatButtonModule, MatDividerModule],
  templateUrl: './prop-definer.component.html',
  styleUrl: './prop-definer.component.scss'
})
export class PropDefinerComponent {
  algorithmTypes: Algorithms[];
  selectedType?: Algorithms;
  selectedAlgo?: Algorithm;
  length: number = 100;

  active: boolean = false;

  constructor(private sortService: SortService) {
    this.algorithmTypes = AlgoTypes as unknown as Algorithms[];
  }

  sliderChangedValue(event: number): void {
    this.length = event;
  }

  generate(): void {
    this.sortService.generate(this.length);
  }
  //add logic after implementing algorithms
  start(): void {
    this.active = true;
    this.sortService.sort(this.selectedAlgo?.name);
  }
  stop(): void {
    this.active = false;
  }

}