class Queue {
    constructor() {
        this.queue = [];
    }

    // Push value to end of queue array
    enqueue(value) {
        this.queue.push(value); 
    }

    // Return & delete the first value in queue array
    dequeue() {
        return this.queue.shift();
    }

    // Return first item in queue array
    peek() {
        return this.queue[0]
    }

    length() {
        return this.queue.length;
    }
}

(function test() {
    console.log('test')
})()