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
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 === null) {
        return null;
    }
    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
    const sentinel = new ListNode(null, null);
    let cur = sentinel;
    let cur1 = l1;
    let cur2 = l2;
    while(cur1 !== null && cur2 !== null) {
        if(cur1.val <= cur2.val) {
            cur.next = cur1;
            cur = cur.next;
            cur1 = cur1.next;
        } else {
            cur.next = cur2;
            cur = cur.next;
            cur2 = cur2.next;
        }   
    }
    if(cur1 !== null) {
        cur.next = cur1;
    }
    if(cur2 !== null) {
        cur.next = cur2;
    }
    return sentinel.next;
};