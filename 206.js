/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let current = head;
    if (head === null) {
        return null;
    }
    let next = current.next;
    let newHead = head;
    while (current !== null && next !== null) {
        let tempNext = next.next;
        let tempCurrent = next;
        next.next = current;
        next = tempNext;
        current = tempCurrent;
        newHead = current;
    }
    head.next = null;
    return newHead;
};