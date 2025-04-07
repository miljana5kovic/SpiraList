import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { Algorithms } from '../../models/algorithms';
import AlgoTypes from '../../assets/algos.json'

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

  active: boolean = false;
  constructor() {
    this.algorithmTypes = AlgoTypes as unknown as Algorithms[];
  }

  generate(): void {
    console.log('GENERATED!'); //should emit event to component to draw
  }

  //add logic after implementing algorithms
  start(): void {
    this.active = true;
  }
  stop(): void {
    this.active = false;
  }

}