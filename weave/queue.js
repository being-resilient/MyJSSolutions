class Queue {
    constructor() {
        this.data = []
    }

    add(record) {
        this.data.unshift(record)
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    remove() {
        return this.data.pop()
    }
}

// const q = new Queue();
// q.add(1);
// q.add(2);
// q.add(3)

// console.log(q.remove())
// console.log(q.remove())
// console.log(q.remove())
// console.log(q.peek())
// console.log(q.peek())

module.exports = Queue;
