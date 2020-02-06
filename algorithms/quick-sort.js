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

(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log('test')
})()