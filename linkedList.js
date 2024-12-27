const linkedList = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};
head = [1, 2];
head2 = [1], pos = -1
console.log(linkedList(head));
console.log(linkedList(head2))
