function mergeSortTopDown(array) {
    if(array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return mergeSortTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}


(function test() {
    console.log('test')
})()