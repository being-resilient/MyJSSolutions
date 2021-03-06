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

    clear() {
        this.head = null
    }

    removeFirst() {
        const temp = this.head.next
        this.head = temp
    }

    removeLast() {
        var temp = this.head
        var prev = null
        if (!temp || !temp.next) {
            temp = null 
            this.head = temp
        } else {
            while (temp) {
                prev = temp
                temp = temp.next
                if (!temp.next) {
                    prev.next = null
                    break
                }
            } 
        }
    }

    /* insertLast(data) {
        var temp = this.head
        var prev = null
        const node = new Node(data)
        if (!temp) {
            temp = node
            this.head = temp
        } else {
            while (temp) {
                prev = temp
                temp = temp.next
            }
            prev.next = node
        }
    } */

    insertLast(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            var temp = this.head
            while(temp.next !== null) {
                temp = temp.next
            }
            temp.next = new Node(data)
        }
        return this.head
    }

    getAt(position) {
        var crawl = 0
        var temp = this.head
        if (this.size() < position) {
            return null
        } else {
            while(temp) {
                if (crawl === position) {
                    return temp
                } else {
                    temp = temp.next
                    crawl += 1
                }
            } 
        }
    }
}

module.exports = { Node, LinkedList };
const list = new LinkedList();

// list.size()
//list.insertFirst('e')
//list.insertFirst('f')
//list.insertFirst('g')
//console.log(list.size())
//list.removeLast()
//console.log(list.size())
//console.log(list.getLast())
//list.insertFirst('h')
//list.insertFirst('i')
//list.insertFirst('j')
//list.insertFirst('e')
//list.insertFirst('f')
console.log(list.insertLast(1));
console.log(list.insertLast(2));
console.log(list.insertLast(3));
console.log(list.insertLast(4));
console.log(list.getAt(0).data)
console.log(list.getAt(1).data)
console.log(list.getAt(2).data)
console.log(list.getAt(3).data)
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
