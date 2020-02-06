class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        // Push value to end of queue array
        this.queue.push(value); 
    }

    dequeue() {
        // Return & delete the first value in queue array
        return this.queue.shift();
    }
}

(function test() {
    console.log('test')
})()