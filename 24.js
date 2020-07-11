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
var swapPairs = function(head) {
    let sentinal = new ListNode();
    sentinal.next = head;
    let cur = sentinal;
    while(cur.next && cur.next.next) {
        const temp1 = cur.next;
        const temp2 = cur.next.next;
        const temp3 = cur.next.next.next;
        cur.next = temp2;
        temp1.next = temp3;
        temp2.next = temp1;
        cur = temp1;
    }
    return sentinal.next;
};