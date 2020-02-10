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
            this.vertices.slice(index, 1);
        }

        // If this vertex has an edge
        while(this.edges[vertex].length) {
            // Get last vertex in edge array (will loop until they are empty)
            const adjacentVertex = this.edges[vertex].pop();

            this.removeEdge(adjacentVertex, vertex);
        }
    }
}

(function test() {
    console.log('test')
})()