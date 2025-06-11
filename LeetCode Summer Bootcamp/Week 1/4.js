// Reverse Linked List
const reverseLinkedList = (head) => {
  let prev = null;
  let curr = head;
  let temp;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};
