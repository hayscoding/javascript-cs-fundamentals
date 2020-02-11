function Node(data) {
    this.data = data;
    this.left, this.right = null;
}

(function test() {
    let node1 = new Node('Node1')
    console.table(node1.right)
})()