import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import AlgoTypes from '../../assets/algos.json'
import { Algorithms } from '../../models/algorithms';

@Component({
  selector: 'prop-definer',
  imports: [CommonModule, MatSelectModule, MatSliderModule],
  templateUrl: './prop-definer.component.html',
  styleUrl: './prop-definer.component.scss'
})
export class PropDefinerComponent {
  algorithmTypes: Algorithms[];
  selected?: Algorithms;
  constructor() {
    this.algorithmTypes = AlgoTypes as unknown as Algorithms[];
  }
}
