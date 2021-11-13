import ListNode from '../nodes/ListNode';

class LinkedList {
  constructor(sequence = []) {
    this.head = this.tail = null;

    for (let val of sequence) {
      this.append(val);
    }
  }

  append(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
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
