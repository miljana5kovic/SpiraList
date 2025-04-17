import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SortService } from '../../services/sort.service';
import { SortAlgoService } from '../../services/sort-algo.service';

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

  async sort(algo: string): Promise<void> { // must send event when completed to service so that active can be changed
    switch (algo) {
      case "selection sort": // all cases for sorting types should be in some enum and accessed by ids...
        await this.sortAlgoService.selectionSort(true, this.array);
        break;
      case "insertion sort":
        await this.sortAlgoService.insertionSort(true, this.array);
        break;
      case "bubble sort":
        await this.sortAlgoService.bubbleSort(true, this.array);
        break;
      case "merge sort":
        break;
      default:
        throw Error('Invalid sorting type');
    }
    this.sortService.sortCompleted();
  }
}