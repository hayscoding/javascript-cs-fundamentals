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

        if (!this.root) {
            // Set root node if there are no nodes
            this.root = node;
        } else {
            this.insertNode(node)
        }
    }

    insertNode(node) {
        let current = this.root;

        while (current) {
            // Nodes data is smaller than current node's data
            if (node.data < current.data) {
                // There is no node at current's left pointer
                if (!current.left) {
                    current.left = node;
                    break;
                }
                // Loop until !current.left returns true
                current = current.left
            } else if (node.data > current.data) {
                if (!current.right) {
                    current.right = node;
                    break;
                }

                current = current.right;
            } else
                break;
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (!node) {
            return null;
        }

        if (data === node.data) {
            if (!node.left && !node.right) {
                return null
            }

            if (!node.left) {
                return node.right;
            }

            if (!node.right) {
                return node.left;
            }

            const temp = this.getMin(node.right);
            node.data = temp;

            node.right = this.removeNode(node.right, temp);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    getMin(node) {
        if (!node) {
            node = this.root;
        }

        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    preOrder(node, fn) {
        if (node) {
            if (fn) {
                fn(node);
            }

            this.preOrder(node.left, fn);
            this.preOrder(node.right, fn);
        }
    }

    traverseDFS(cb, method) {
        const current = this.root;

        if (method) {
            this[`${method}`](current, cb);
        } else {
            this.preOrder(current, cb);
        }
    }
}

(function test() {
    let tree = new BinarySearchTree()

    tree.add(5)
    tree.add(3)
    tree.add(1)
    tree.add(4)
    tree.add(7)
    tree.add(6)
    tree.add(9)

    // tree.printByLevel();
    // console.log(tree)

    tree.traverseDFS((node) => {
        console.log(
            `Node.data: ${node.data}`,
            `Node.left: ${node.left ? node.left.data : null}`,
            `Node.right: ${node.right ? node.right.data : null}`
        )
    })


    // console.log('remove 2')
    // tree.remove(2)
    // console.log(tree)
})()