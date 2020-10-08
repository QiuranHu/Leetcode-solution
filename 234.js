/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null) {
    return true;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const reverse = (start) => {
    let previous = null;
    let next = null;
    while (start !== null) {
      next = start.next;
      start.next = previous;
      previous = start;
      start = next;
    }
    return previous;
  };
  slow = reverse(slow);
  while (slow !== null && head !== null) {
    if (head.val !== slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }
  return true;
};
