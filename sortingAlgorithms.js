// Bubble Sort
const bubbleSort = (arr) => {
    let swaps;
    for (let i = arr.length - 1; i > 0; i--) {
        swaps = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps = true;
            }
        }
        if (!swaps) break;
    }
    return arr;
};

console.log(bubbleSort([1, 8, 4, -9, 0, 2, 5, 4]));
console.log(
    bubbleSort(["Cricket", "Basketball", "Football", "Badminton", "Tennis"])
);

// Selection Sort
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
};

console.log(
    selectionSort([8, 3, 5, 0, 2, 1, 5, 10, 65, -67, -3, 43, 23, 8, 4])
);

// Insertion Sort
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
};

console.log(
    insertionSort([8, 3, 5, 0, 2, 1, 5, 10, 65, -67, -3, 43, 23, 8, 4])
);

// Merge Sort
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (left, right) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
};

console.log(mergeSort([2, 5, 1, 20, 8, 0, 45, 32, -6, -5]));

// Quick Sort
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left side of the pivot
        quickSort(arr, left, pivotIndex - 1);
        // right side of the pivot
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};

const pivot = (arr, start, end) => {
    const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
};

console.log(quickSort([4, 63, -6, -1, 5, 0, -9, 69]));
