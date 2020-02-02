function Node(data) {
    this.data = data;
    this.children = [];
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data, toNodeData) {
        const node = new Node(data);
        // If the toNodeData arg is passed, find it. Otherwise, store null.
        const parent = toNodeData ? this.findBFS(toNodeData) : null;

        // Push new node to parent with passed toNodeData in its data
        if(parent) {
            parent.children.push(node)
        } else {
            // If there's no parent, make this the root node
            if(!this.root)
                this.root = node;
            else
                return "Tried to store node as root when root already exists."
        }
    }

    // findBFS(data) {
    //     const queue = [this.root];

    //     while(queue.length) {
    //         const node = queue.shift();
    //     }
    // }
}

(function test() {
    let tree = new Tree()

    tree.add('Node1')
    // tree.add('Node2')
    // tree.add('Node3')

    console.log(tree)
})()