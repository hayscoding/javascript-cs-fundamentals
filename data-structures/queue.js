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

    print() {
        console.log(this.queue.join(' -> '))
    }
}

(function test() {
    var queue = new Queue();

    queue.enqueue('Node1')
    queue.enqueue('Node2')
    queue.enqueue('Node3')
    queue.enqueue('Node4')

    queue.print()

    queue.dequeue()

    queue.print()
})()