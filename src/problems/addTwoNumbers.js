import LinkedList from '@ds/LinkedList';

const addTwoNumbers = () => {
  const list = new LinkedList([1, 2, 3, 4]);
  for (let item of list.traverse()) {
    console.log(item.val);
  }
};

export default addTwoNumbers;
