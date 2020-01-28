function Node(data) {
    this.data = data;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.head = null;   //  Node at start of list
        this.tail = null;   //  Node at end of list
    }

    addNode(data) {
        const node = new Node(data);   

        if(!this.head) {
            //  Make this node both the tail & head
            //  since there are no other nodes.
            this.head = node;
            this.tail = node;
        } else {
            //  Make this the next node for the current tail
            this.tail.next = node;
            //  Then set the tail to this node
            this.tail = node;
        }
    }

    //  Calls cb(node) for all nodes, starting with head
    traverse(cb) {
        let current = this.head
        
        if(cb)  //  Only loop if a function was passed
            while (current) {
                cb(current)
                current = current.next  //  Move to next node
            }
    }
}

// Run tests to ensure data structure works
(function test() {
    let linkedList = new LinkedList();

    linkedList.addNode("first node")
    linkedList.addNode("second node")
    linkedList.addNode("third node")

    traverse((node) => { console.log(node.data) })
})()