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

    merge(left: number[], right: number[]): number[] {
        let resultArray: number[] = [], leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }

    async mergeSort1(array: number[]): Promise<number[]> {
        if (array.length <= 1) {
            return array;
        }
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        return this.merge(await this.mergeSort1(left), await this.mergeSort1(right));
    }
    async mergeSort(a: boolean, array: number[]): Promise<void> {
        let array1 = await this.mergeSort1(array);
        for (let i = 0; i < (array1).length; i++) {
            array[i] = array1[i];
        }
    }
}