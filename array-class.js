'use strict';

const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}

function main() {

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3); // Array { length: 1, _capacity: 3, ptr: 0 }
  arr.push(5); // Array { length: 2, _capacity: 3, ptr: 0 }
  arr.push(15); // Array { length: 3, _capacity: 3, ptr: 0 }
  arr.push(19); // Array { length: 4, _capacity: 12, ptr: 3 }
  arr.push(45); // Array { length: 5, _capacity: 12, ptr: 3 }
  arr.push(10); // Array { length: 6, _capacity: 12, ptr: 3 }
  arr.pop(); // Array { length: 5, _capacity: 12, ptr: 3 }
  arr.pop(); // Array { length: 4, _capacity: 12, ptr: 3 }
  arr.pop(); // Array { length: 3, _capacity: 12, ptr: 3 }

  console.log(arr);
}

main();



// Explain the result of your program after adding the new lines of code.
// The capacity triples after it's filled, and the pointer moves to the point
// where the new set of data begins. If you then take away units of data (length), 
// the capacity will still stay enlarged and the pointer stays where it is.

// why does the pointer get set to 3 after adding in the pushes?