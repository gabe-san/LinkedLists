import Node from './node';

class LinkedList {


  constructor(head = null) {
    this.head = head;
    this.length = 0;

  }

  size() {
    return this.length;
  }
  prepend(value) {
    const head = new Node(value);
    if (this.head === null) {
      this.head === head
      this.length++
    }
  }

  append(value) {
    const nodeItem = new Node(value);
    if (this.head === null) {
      this.head = nodeItem;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next
      }
      current.next = nodeItem;
    }
    this.length++
  }

  head() {
    if (this.head === null) {
      return console.log('No node in list')
    } else {
      return this.head;
    }
  }

  tail() {
    if (this.head === null) {
      return console.log('Only reference to head pointer available')
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next
      }
      return current
    }
  }
  at(index) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === index) {
        return current
      }
      count++
      current = current.next
    }
    return null
  }
  pop() {
    if (this.head === null) {
      return console.log('No node to pop: only head pointer')
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next
      }
      this.length--;
      current.next = null;

    }
  }
  // when in a while loop, when to use current vs current.next?
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true
      } else {
        current = current.next
      }
      return false
    }
  }

  find(value) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.value = value) {
        return count
      }
      count++
      current = current.next
    }
    return null
  }
  toString() {
    let stringResult = '';
    let current = this.head;
    while (current) {
      stringResult += `( ${current.value} )` + ((current.next) ? ' -> ' : ' -> null');
      current = current.next
    }
    return stringResult
  }
}

const list = new LinkedList();
export default list;
