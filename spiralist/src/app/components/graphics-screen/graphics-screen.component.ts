import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SortService } from '../../services/sort.service';
import { SortAlgoService } from '../../services/sort-algo.service';
import { Algos } from '../../assets/algos';

@Component({
  selector: 'graphics-screen',
  imports: [CommonModule],
  templateUrl: './graphics-screen.component.html',
  styleUrl: './graphics-screen.component.scss'
})
export class GraphicsScreenComponent implements OnInit {
  array: number[] = [];

  constructor(public sortService: SortService, public sortAlgoService: SortAlgoService) {
    this.array = this.generate(50); //this is the same value from prop defiener
  }

  ngOnInit(): void {
    this.sortService.generateEvent.subscribe(x => this.array = this.generate(x))
    this.sortService.sortEvent.subscribe(x => this.sort(x));
  }

  generate(len: number): number[] {
    this.sortAlgoService.sortedIndices = [];
    this.sortAlgoService.comparedIndices = [];
    return Array(len)
      .fill(undefined)
      .map(() => Math.floor(600 * Math.random() + 100));
  }

  async sort(algo: Algos): Promise<void> {
    switch (algo) {
      case 0:
        await this.sortAlgoService.selectionSort(true, this.array);
        break;
      case 2:
        await this.sortAlgoService.insertionSort(true, this.array);
        break;
      case 1:
        await this.sortAlgoService.bubbleSort(true, this.array);
        break;
      case 3:
        await this.sortAlgoService.mergeSort(true, this.array);
        break;
      default:
        throw Error('Invalid sorting type');
    }
    this.sortService.sortCompleted();
  }
}