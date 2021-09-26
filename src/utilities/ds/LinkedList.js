import ListNode from '@nodes/ListNode';

class LinkedList {
  constructor(sequence) {
    this.head = this.tail = null;

    for (let val of sequence) {
      this.append(val);
    }
  }

  append(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  *traverse() {
    let traveller = this.head;
    while (traveller) {
      yield traveller;
      traveller = traveller.next;
    }
  }
}

export default LinkedList;
