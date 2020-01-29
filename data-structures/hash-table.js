class HashTable {
    constructor(size) {
        this.values = {};
        this.size = size;
    }

    add(key, value) {
        const hash = this.genHash(key)

        // Initialize this portion of table
        // if it has not yet been defined
        if(!this.values.hasOwnProperty(hash))  
            this.values[hash] = {};

        this.values[hash][key] = value;
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

    printAll() {
        for(const val in this.values)
            for(const key in this.values[val])
                console.log("{", key, ", ", 
                    this.values[val][key], "}")
    }
}

(function test() {
    var hashTable = new HashTable(5);

    hashTable.add("key1", "value1");
    hashTable.add("key2", "value2");

    hashTable.printAll();

    // console.log("hash: ", hashTable.genHash("test"))
})()