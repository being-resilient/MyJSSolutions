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
        if (!this.head.next) {
            this.head.next = node
        } else {
            var temp = this.head
            while(temp.next !== null) {
                temp = temp.next
            }
            temp.next = new Node(data)
        }
        return this.head
    }

    size() {
        var size = 0
        while(this.head.next !== null) {
            this.head = this.head.next
            size = size + 1
        }
        return size
    }
}

// module.exports = { Node, LinkedList };
const list = new LinkedList();

// list.size()
list.insertFirst('e')
list.insertFirst('f')
list.insertFirst('g')
list.insertFirst('h')
list.insertFirst('i')
console.log(list.size())
