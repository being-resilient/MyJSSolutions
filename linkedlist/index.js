class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            const temp = this.head
            this.head = node
            node.next = temp
        }
    }

    size() {
        var size = 0
        var temp = this.head
        while(temp) {
            temp = temp.next
            size += 1
        }
        return size    
    }

    getFirst() {
        return this.head
    }

    getLast() {
        var temp = this.head
        var prev = null
        while (temp) {
            prev = temp
            temp = temp.next
        }
        return prev
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

    clear() {
        this.head = null
        return this.head
    }

    removeFirst() {
        const temp = this.head.next
        this.head.next = temp.next
    }

    removeLast() {
        var temp = new Node(null)
        temp = this.head
        var temp_two = new Node(null)
        while (temp.next !== null) {
            temp_two = temp
            temp = temp.next
        }
        temp_two = null
    }
}

module.exports = { Node, LinkedList };
//const list = new LinkedList();

// list.size()
//list.insertAfter('e')
//list.insertAfter('f')
//list.insertAfter('g')
//list.insertAfter('h')
//list.insertAfter('i')
//list.insertAfter('j')
//list.insertFirst('e')
//list.insertFirst('f')
//list.insertFirst('g')
//list.insertFirst('h')
//list.insertFirst('i')
//console.log(list.size())
//list.removeFirst()
//list.removeFirst()
//list.removeFirst()
//console.log(list.getFirst())
//console.log(list.getLast())
//console.log(list.head)
//list.removeLast()
// console.log(list.size())
//console.log(list.getLast())
// console.log(list.clear())
// console.log(list.size())
