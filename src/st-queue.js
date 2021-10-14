const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue === null) return (this.queue = new ListNode(value));

    let position = this.queue;
    while (position.next !== null) position = position.next;

    return (position.next = new ListNode(value));
  }

  dequeue() {
    const position = this.queue.value;
    this.queue = this.queue.next;
    return position;
  }
}
