class Stack {
    constructor() {
      this.items = [];
    }
  
    push(x) {
      this.items.push(x);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class QueueUsingStacks {
    constructor() {
      this.s1 = new Stack();
      this.s2 = new Stack();
    }
  
    enqueue(x) {
      this.s1.push(x);
    }
  
    dequeue() {
      if (this.s2.isEmpty()) {
        while (!this.s1.isEmpty()) {
          this.s2.push(this.s1.pop());
        }
      }
      return this.s2.pop();
    }
  
    isEmpty() {
      return this.s1.isEmpty() && this.s2.isEmpty();
    }
  }
  