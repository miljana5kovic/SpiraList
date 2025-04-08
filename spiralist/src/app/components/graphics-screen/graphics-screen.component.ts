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

  sort(algo: string): void {
  }
}
