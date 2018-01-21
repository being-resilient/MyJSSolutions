// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed

class Stack {
    constructor() {
        this.data = []
    }

    push(data) {
        this.data.push(data)
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    pop() {
        return this.data.pop()
    }
}

module.exports = Stack;
