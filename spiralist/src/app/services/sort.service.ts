import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService { //rework this to work with any algoritm type
  @Output() generateEvent = new EventEmitter<number>();
  @Output() sortEvent = new EventEmitter<number>();
  @Output() sortCompletedEvent = new EventEmitter();

  speed: number = 50;

  generate(len: number) {
    this.generateEvent.emit(len);
  }

  async sort(sortType: number) {
    await this.sortEvent.emit(sortType);
  }

  sortCompleted() {
    this.sortCompletedEvent.emit();
  }
}