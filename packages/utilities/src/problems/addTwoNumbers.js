import LinkedList from '@ds/LinkedList';

const addTwoNumbers = (l1, l2) => {
  let result = new LinkedList();
  let carry = 0;

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = sum > 9 ? 1 : 0;

    result.append(sum % 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry) {
    result.append(carry);
  }

  return result;
};

export default addTwoNumbers;
