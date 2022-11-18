class Stack {
  constructor(maxSize = 10) {
    if (
      typeof maxSize !== 'number' ||
      maxSize === Infinity ||
      maxSize === -Infinity ||
      maxSize === 0
    ) {
      throw new Error('Invalid limit value');
    }

    this.maxSize = maxSize;
    this.stack = {};
    this.stackCounter = 0;
  }

  push(elem) {
    if (this.stackCounter >= this.maxSize) {
      throw new Error('Limit exceeded');
    }

    this.stackCounter += 1;
    this.stack[this.stackCounter] = elem;
  }

  pop() {
    if (this.stackCounter === 0) {
      throw new Error('Empty stack');
    }

    const elem = this.stack[this.stackCounter];
    delete this.stack[this.stackCounter];
    this.stackCounter -= 1;
    return elem;
  }

  peek() {
    if (this.stack.length === 0) {
      return null;
    }

    return this.stack[this.stackCounter - 1];
  }

  isEmpty() {
    return this.stackCounter === 0;
  }

  toArray() {
    return Object.values(this.stack);
  }

  static fromIterable = (iterable) => {
    if (typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Not iterable');
    }

    const newStack = new Stack(iterable.length);

    for (const elem of iterable) {
      newStack.push(elem);
    }

    return newStack;
  };
}

// module.exports = { Stack };
