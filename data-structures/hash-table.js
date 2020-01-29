class HashTable {
    constructor(size) {
        this.values = {};
        this.numberOfValues = 0;
        this.size = size;
    }



    genHash(key) {
        var keyStr = key.toString();
        var sum = 0;

        // Sum ASCII values of all chars in keyStr
        for(let i = 0; i < keyStr.length; i++)
            sum += keyStr.charCodeAt(i);

        // Ensures index is in range of array
        return sum % this.size
    }
}

(function test() {
    var hashTable = new HashTable(5);

    console.log("hash: ", hashTable.genHash("test"))
})()