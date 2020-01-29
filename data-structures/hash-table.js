class HashTable {
    constructor(size) {
        this.values = {};
        this.numberOfValues = 0;
        this.size = size;
    }

    genHash(key) {
        var keyStr = key.toString();
        var sum = 0;

        for(let i = 0; i < keyStr.length; i++)
            sum += keyStr.charCodeAt(i);

        return sum % this.size
    }
}

(function test() {
    console.log('test')
})()