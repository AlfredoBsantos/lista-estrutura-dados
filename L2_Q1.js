class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      return this.items.shift();
    }
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class StackUsingQueues {
    constructor() {
      this.q1 = new Queue();
      this.q2 = new Queue();
    }
  
    push(x) {
      this.q2.enqueue(x);
      while (!this.q1.isEmpty()) {
        this.q2.enqueue(this.q1.dequeue());
      }
  
      // Swap q1 and q2
      [this.q1, this.q2] = [this.q2, this.q1];
    }
  
    pop() {
      if (!this.q1.isEmpty()) return this.q1.dequeue();
      return null;
    }
  
    top() {
      return this.q1.items[0];
    }
  
    isEmpty() {
      return this.q1.isEmpty();
    }
  }
  