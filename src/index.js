import LinkedList from '@ds/LinkedList';
import addTwoNumbers from './problems/addTwoNumbers';

// 9999 + 99 = 10098 i.e. [8, 9, 0, 0, 1]
const l1 = new LinkedList([9, 9, 9, 9]);
const l2 = new LinkedList([9, 9]);

let result = addTwoNumbers(l1.head, l2.head);
for (let node of result.traverse()) {
  console.log(node.val);
}
