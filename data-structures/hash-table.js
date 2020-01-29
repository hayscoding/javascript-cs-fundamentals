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

    remove(key) {
        const hash = this.genHash(key);

        // If this.values has property at hash with a key
        if(this.values.hasOwnProperty(hash) &&
                this.values[hash].hasOwnProperty(key)) {
            delete this.values[hash][key]; // Delete the value
        }
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

    getValue(key) {
        const hash = this.genHash(key);

        // If this key value pair exists in table
        if(this.values.hasOwnProperty(hash)
                && this.values[hash].hasOwnProperty(key))
            return this.values[hash][key]; // Return the key's value
        else
            return undefined;
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
    hashTable.add("key3", "value3");

    hashTable.printAll();

    console.log(`value of key3: `, hashTable.getValue("key3"))

    console.log(`delete key2`)
    hashTable.remove("key2")

    hashTable.printAll();
})()