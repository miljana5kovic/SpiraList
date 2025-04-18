import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SortAlgoService {
    sortedIndices: number[] = [];
    comparedIndices: number[] = [];

    time: number = 50;

    async bubbleSort(animation: boolean, array: number[]): Promise<void> {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (animation) {
                    this.comparedIndices = [j + 1, j];
                    await new Promise(resolve => setTimeout(resolve, this.time));
                }
                this.comparedIndices = [];
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
            if (animation)
                this.sortedIndices.push(n - 1 - i);
        }
    }

    async insertionSort(animation: boolean, array: number[]): Promise<void> {
        let n = array.length;
        for (let i = 0; i < n; i++) {
            let j = i;
            while (j >= 0 && array[j] < array[j - 1]) {
                if (animation) {
                    this.comparedIndices = [j, j - 1];
                    await new Promise(resolve => setTimeout(resolve, this.time));
                }
                [array[j], array[j - 1]] = [array[j - 1], array[j]];
                j--;
                this.comparedIndices = [];
            }
            if (animation)
                this.sortedIndices.push(i);
        }
    }

    async selectionSort(animation: boolean, array: number[]): Promise<void> {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (animation) {
                    this.comparedIndices = [j, minIndex];
                    await new Promise(resolve => setTimeout(resolve, this.time));
                }
                if (array[j] < array[minIndex])
                    minIndex = j;
            }
            this.comparedIndices = [];
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            if (animation)
                this.sortedIndices.push(i);
        }
        if (animation)
            this.sortedIndices.push(n - 1);
    }
}