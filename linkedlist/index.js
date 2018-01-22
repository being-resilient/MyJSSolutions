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
        const temp = this.head.next
        this.head.next = node
        node.next = temp
        return this.head
    }

    insertAfter(data) {
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
        var temp = this.head
        if(!this.head) { return size } else {
            while(temp !== null) {
                temp = temp.next
                size = size + 1
            }
            return size - 1
        }
        
    }

    getFirst() {
        return this.head.next
    }

    getLast() {
        var temp = new Node(null)
        while (this.head.next !== null) {
            temp = this.head
            this.head = this.head.next
        }
        return temp.next
    }

    clear() {
        this.head = null
        return this.head
    }

    removeFirst() {
        const temp = this.head.next
        this.head.next = temp.next
    }
}

// module.exports = { Node, LinkedList };
const list = new LinkedList();

// list.size()
list.insertAfter('e')
list.insertAfter('f')
list.insertAfter('g')
list.insertAfter('h')
list.insertAfter('i')
list.insertFirst('e')
list.insertFirst('f')
list.insertFirst('g')
list.insertFirst('h')
list.insertFirst('i')
console.log(list.size())
list.removeFirst()
list.removeFirst()
list.removeFirst()
console.log(list.getFirst())
console.log(list.size())
// console.log(list.getLast())
// console.log(list.clear())
// console.log(list.size())
