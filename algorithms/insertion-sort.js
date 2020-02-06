function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        while(array[j] > temp) {
            array[j+1] = array[j];

            j--;
        }

        array[j + 1] = temp;
    }

    return array
}

(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log(insertionSort(testArray1))
    console.log(insertionSort(testArray2))
    console.log(insertionSort(testArray3))
})()