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
                parent.children.push(node);
            else
                return "Tried to store node as root when root already exists."
        }
    }
}

(function test() {
    console.log('test')
})()