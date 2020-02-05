function bubbleSort(array) {
    let swapped;

    do {
        swapped = false;

        for(let i = 0; i < array.length; i++) {
            if(
                array[i + 1] &&         // Next element is defined
                array[i] > array[i + 1] // This element is greater than the next
            ) {
                // Switch indexes of current value & the next one.
                [array[i], array[i + 1]] = [array[i + 1], array[i]];

                // Perpetuates while() loop if only 1 value was swapped.
                swapped = true;  
            }
        }
    } while(swapped);

    return array;
}

(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]

    console.log(bubbleSort(testArray1))
})()