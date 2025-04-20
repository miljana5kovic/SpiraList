import { EventEmitter, Injectable, Output } from "@angular/core";
import { SortService } from "./sort.service";

@Injectable({
    providedIn: 'root'
})
export class SortAlgoService {
    sortedIndices: number[] = [];
    comparedIndices: number[] = [];

    constructor(private sortService: SortService) {

    }

    async bubbleSort(animation: boolean, array: number[]): Promise<void> {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (animation) {
                    this.comparedIndices = [j + 1, j];
                    await new Promise(resolve => setTimeout(resolve, this.sortService.speed));
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
                    await new Promise(resolve => setTimeout(resolve, this.sortService.speed));
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
                    await new Promise(resolve => setTimeout(resolve, this.sortService.speed));
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

    async mergeSort(animation: boolean, array: number[]): Promise<void> {
        let n = array.length;
    }

    async merge(array1: number[], array2: number[]): Promise<number[]> {
        let merged: number[] = [];
        let i = 0, j = 0;
        while (i < array1.length || j < array2.length) {
            if (j >= array2.length || array1[i] <= array2[j]) { merged.push(array1[i]); i++; }
            else { merged.push(array2[j]); j++; }
        }
        return merged;
    }
}