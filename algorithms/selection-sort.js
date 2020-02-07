function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let min = i;

        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }

        if(i !== min) {
            [array[i], array[min]] = [array[min], array[i]]
        }
    }

    return array;
}

(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log(selectionSort(testArray1))
    console.log(selectionSort(testArray2))
    console.log(selectionSort(testArray3))
})()