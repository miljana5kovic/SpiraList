import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'graphics-screen',
  imports: [CommonModule],
  templateUrl: './graphics-screen.component.html',
  styleUrl: './graphics-screen.component.scss'
})
export class GraphicsScreenComponent implements OnInit {
  array: number[] = [];
  swappedIndices: number[] = [];
  comparedIndices: number[] = [];

  constructor(private sortService: SortService) {
    this.array = this.generate(100);
  }

  ngOnInit(): void {
    this.sortService.generateEvent.subscribe(x => this.array = this.generate(x))
    this.sortService.sortEvent.subscribe(x => this.sort(x));
  }

  generate(len: number): number[] {
    this.swappedIndices = [];
    this.comparedIndices = [];
    return Array(len)
      .fill(undefined)
      .map(() => Math.floor(600 * Math.random() + 100));
  }

  async sort(algo: string): Promise<void> { // must send event when completed to service so that active can be changed
    const n = this.array.length;
    switch (algo) { // these should be in separate functions
      case "selection sort": // all cases for sorting types should be in some enum and accessed by ids...
        for (let i = 0; i < n - 1; i++) {
          let minIndex = i;
          for (let j = i + 1; j < n; j++) {
            this.comparedIndices = [j, minIndex];
            await new Promise(resolve => setTimeout(resolve, 1));
            // add so that user can choose how fast it goes
            if (this.array[j] < this.array[minIndex])
              minIndex = j;
            this.comparedIndices = [minIndex];
          }
          this.comparedIndices = [];
          this.swappedIndices.push(i);
          this.swappedIndices.push(minIndex);
          await new Promise(resolve => setTimeout(resolve, 5));
          [this.array[i], this.array[minIndex]] = [this.array[minIndex], this.array[i]];
          this.swappedIndices.pop();
        }
        this.swappedIndices.push(n - 1);
        break;
      case "merge sort":
        break;
      case "bubble sort":
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (this.array[j] > this.array[j + 1]) {
              [this.array[j], this.array[j + 1]] = [this.array[j + 1], this.array[j]];
              this.swappedIndices = [j, j + 1];
              
            }
          }
        }
        break;
      default:
        throw Error('Invalid sorting type');
    }
    this.sortService.sortCompleted();
  }
}