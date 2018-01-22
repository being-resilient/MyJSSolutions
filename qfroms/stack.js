class Stack {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    remove() {
        return this.data.pop()
    }
}

module.exports = Stack;
