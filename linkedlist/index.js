class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(null)
    }

    insertFirst(data) {
        const node = new Node(data)
        
        while(this.head.next !== null) {
            this.head = this.head.next
        }
        this.head.next = node
        return this.head
    }
}

// module.exports = { Node, LinkedList };
const list = new LinkedList();
list.insertFirst('a');
//list.insertFirst('b');
//list.insertFirst('c');
//list.insertFirst('d');
console.log(list.head)