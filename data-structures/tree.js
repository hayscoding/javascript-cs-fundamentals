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

    findBFS(data) {
        const queue = [this.root];

        while(queue.length) {
            // Store current node & remove it from queue
            const node = queue.shift();

            // Return match if found
            if(node.data === data) {
                return node;
            }

            // Push children of current node to the queue
            for (const child of node.children) {
                queue.push(child);
            }
        }

        // Return null if a match was never found
        return null;
    }
}

(function test() {
    let tree = new Tree()

    tree.add('Node1')
    tree.add('Node2', 'Node1')
    tree.add('Node3', 'Node1')

    console.log(tree)
})()