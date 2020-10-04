/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinHeap {
    constructor() {
        this.array = [null];
    }
    swap(index1, index2) {
        const temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
    }
    push(element) {
        this.array.push(element);
        let index = this.array.length - 1;
        let parent = Math.trunc(index / 2);
        while (index > 1 && element < this.array[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = Math.trunc(index / 2);
        }
    }
    getMin() {
        return this.array[1];
    }
    pop() {
        this.swap(1, this.array.length - 1);
        const elementToReturn = this.array.pop();
        let index = 1;
        while (true) {
            let leftChild = index * 2;
            let rightChild = index * 2 + 1;
            if (leftChild >= this.array.length) {
                break;
            }
            let minimum = this.array[leftChild];
            let minimumIndex = leftChild;
            if (rightChild < this.array.length && this.array[rightChild] < this.array[leftChild]) {
                minimum = this.array[rightChild];
                minimumIndex = rightChild;
            }
            if (this.array[index] < minimum) {
                break;
            }
            this.swap(index, minimumIndex);
            index = minimumIndex;
        }
        return elementToReturn;
    }
}
var findKthLargest = function (nums, k) {
    const heap = new MinHeap();
    for (let num of nums) {
        heap.push(num);
        if (heap.array.length - 2 === k) {
            heap.pop();
        }
    }
    const array = heap.array;
    let minimum = array[1];
    for (let i = 2; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
    }
    return minimum;
};