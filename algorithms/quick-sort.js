function quickSort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    const pivot = partitionHoare(array, left, right);

    if(left < pivot - 1) {
        quickSort(array, left, pivot - 1);
    }

    if(right > pivot) {
        quickSort(array, pivot, right);
    }

    return array;
}

function partitionHoare(array, left, right) {
    const pivot = Math.floor((left + right) / 2);

    while(left <= right) {
        while(array[left] < array[pivot]) {
            left++;
        }

        while(array[right] > array[pivot]) {
            right--;
        }

        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }

    return left;
}

(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log(quickSort(testArray1))
})()