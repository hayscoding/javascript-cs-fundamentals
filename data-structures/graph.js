class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }

    addVertex(vertex) {
        this.vertices.push(vertex);

        this.edges[vertex] = [];
    }

    removeVertex(vertex) {
        const index = this.vertices.indexOf(vertex);

        if(index >= 0) {
            this.vertices.splice(index, 1);
        }

        // If this vertex has an edge
        while(this.edges[vertex].length) {
            // Get last vertex in edge array (will loop until they are empty)
            const adjacentVertex = this.edges[vertex].pop();

            this.removeEdge(adjacentVertex, vertex);
        }
    }

    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;
    }

    removeEdge(vertex1, vertex2) {
        const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
        const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;

        if(index1 >= 0) {
            // Remove vertex2 from the vertex1 array
            this.edges[vertex1].splice(index1, 1);
            this.numberOfEdges--;
        }

        if(index2 >= 0) {
            // Remove vertex1 from the vertex2 array
            this.edges[vertex2].splice(index2, 1);
        }
    }

    size() {
        return this.vertices.length;
    }

    relations() {
        return this.numberOfEdges;
    }

    print() {
        console.log(this.vertices.map(vertex => {
            return(`${vertex} => ${this.edges[vertex].join(', ')}`).trim();
        }, this).join(' | '));
    }
}

(function test() {
    let graph = new Graph();

    graph.addVertex("Node1")
    graph.addVertex("Node2")
    graph.addVertex("Node3")
    graph.addVertex("Node4")

    graph.addEdge("Node1", "Node2")
    graph.addEdge("Node1", "Node3")
    graph.addEdge("Node1", "Node4")

    graph.addEdge("Node2", "Node3")
    graph.addEdge("Node2", "Node4")

    graph.print()

    console.log("remove edge")

    graph.removeEdge("Node1", "Node2")
    graph.print()

    console.log("remove vertex")

    graph.removeVertex("Node1")
    graph.print()
})()