/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const sentinal = new ListNode(0, null);
    let current = sentinal;
    let carry = 0;
    while(l1 !== null && l2 !== null) {
        const result = l1.val + l2.val + carry;
        current.next = new ListNode(result % 10, null);
        current = current.next;
        carry = Math.floor(result / 10);
        l1 = l1.next;
        l2 = l2.next;
    }
    let list = null;
    if(l1 !== null) {
        list = l1;
    }
    if(l2 !== null) {
        list = l2;
    }
    while(list !== null) {
        const result = list.val + carry;
        current.next = new ListNode(result % 10, null);
        current = current.next;
        carry = Math.floor(result / 10);
        list = list.next;
    }
    if(carry !== 0) {
        current.next = new ListNode(carry, null);
    }
    return sentinal.next;
}