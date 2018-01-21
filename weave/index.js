// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.

const Queue = require('./queue.js');

function weave(sourceOne, sourceTwo) {
    const QueueThree = new Queue();
    while (sourceOne.peek() && sourceTwo.peek()) {
        QueueThree.add(sourceOne.remove())
        QueueThree.add(sourceTwo.remove()) 
    }

    if (sourceOne.peek() === undefined) {
        while(sourceTwo.peek() !== undefined) {

            QueueThree.add(sourceTwo.remove())
        }
    } else {
        while(sourceOne.peek() !== undefined) {
            QueueThree.add(sourceOne.remove())
        }
    }

    return QueueThree
}

module.exports = weave;
