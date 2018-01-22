// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackOne = new Stack()
        this.stackTwo = new Stack()
    }

    add(data) {
        if (this.stackOne && this.stackTwo) {
            while (this.stackOne.peek() !== undefined) 
            {
                this.stackTwo.add(this.stackOne.remove())
            }
            this.stackOne.add(data)
            while(this.stackTwo.peek() !== undefined) 
            {
                this.stackOne.add(this.stackTwo.remove())
            }
        } 
    }
    
    peek() {
        return this.stackOne.peek()
    }

    remove() {
        return this.stackOne.remove()
    }
}

module.exports = Queue;
