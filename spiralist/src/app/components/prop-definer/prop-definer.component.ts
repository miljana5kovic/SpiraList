import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { Algo, Algorithms } from '../../models/algorithms';
import AlgoTypes from '../../assets/algos.json'
import { SortService } from '../../services/sort.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'prop-definer',
  imports: [CommonModule, MatSelectModule, MatSliderModule, MatButtonModule, MatDividerModule],
  templateUrl: './prop-definer.component.html',
  styleUrl: './prop-definer.component.scss'
})
export class PropDefinerComponent implements OnDestroy {
  algorithmTypes: Algorithms[];
  selectedType: Algorithms;
  selectedAlgo: Algo;
  length: number = 50;
  subscriptions: Subscription[] = [];

  active: boolean = false;

  constructor(public sortService: SortService) {
    this.algorithmTypes = AlgoTypes as unknown as Algorithms[];
    this.selectedType = this.algorithmTypes[0];
    this.selectedAlgo = this.selectedType.algos[0];
  }

  sliderChangedValue(event: number): void {
    this.length = event;
  }

  sliderChangedValueSpeed(event: number): void {
    this.sortService.speed = event;
  }

  generate(): void {
    this.sortService.generate(this.length);
  }

  start(): void {
    this.active = true;
    this.sortService.sort(this.selectedAlgo?.id);
    this.subscriptions.push(this.sortService.sortCompletedEvent.subscribe(() => this.active = false));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

}