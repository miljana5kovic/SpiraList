import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'graphics-screen',
  imports: [CommonModule],
  templateUrl: './graphics-screen.component.html',
  styleUrl: './graphics-screen.component.scss'
})
export class GraphicsScreenComponent implements OnInit {
  array: number[] = [];

  constructor(private sortService: SortService) {
    this.array = this.generate(100);
  }

  ngOnInit(): void {
    this.sortService.generateEvent.subscribe(x => this.array = this.generate(x))
    this.sortService.sortEvent.subscribe(x => this.sort(x));
  }

  generate(len: number): number[] {
    return Array(len)
      .fill(undefined)
      .map(() => Math.floor(600 * Math.random() + 100));
  }

  async sort(algo: string): Promise<void> {
    const n = this.array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (this.array[j] < this.array[minIndex]) {
          minIndex = j;
        }
      }
      [this.array[i], this.array[minIndex]] = [this.array[minIndex], this.array[i]];
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}