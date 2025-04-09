import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService { //rework this to work with any algoritm type
  @Output() generateEvent = new EventEmitter<number>();
  @Output() sortEvent = new EventEmitter<string>();

  generate(len: number) {
    this.generateEvent.emit(len);
  }

  async sort(sortType: string | undefined) { //this should not be allowed to undefined
    await this.sortEvent.emit(sortType);
  }
}