function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);

        if(!this.root) {
            // Set root node if there are no nodes
            this.root = node;
        } else {
            let current = this.root;

            while(current) {
                // Nodes data is smaller than current node's data
                if(node.data < current.data) {
                    // There is no node at current's left pointer
                    if(!current.left) {
                        current.left = node;
                        break;
                    }
                    // Loop until !current.left returns true
                    current = current.left
                } else if(node.data > current.data) {
                    if(!current.right) {
                        current.right = node;
                        break;
                    }

                    current = current.right;
                } else 
                    break;
            }
        }
    }

    
}

(function test() {
    let tree = new BinarySearchTree()

    tree.add(2)
    tree.add(3)
    tree.add(1)
    tree.add(4)

    console.log(tree)
})()