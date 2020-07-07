/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Initially, target = head
    // left = head
    // when cnt >= n, move target
    // when cnt >= n + 1， move left
    let target = head;
    let left = head;
    let cur = head;
    let cnt = 0;
    while(cur !== null) {
        if(cnt >= n) {
            target = target.next;
        }
        if(cnt >= n + 1) {
            left = left.next;
        }
        cur = cur.next;
        cnt += 1;
    }
    if(target === head) {
        return head.next;
    } else {
        left.next = target.next;
        return head;
    }
};