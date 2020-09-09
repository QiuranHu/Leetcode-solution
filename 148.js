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
var sortList = function (head) {
    const helper = (start) => {
        if (start === null) {
            return start;
        }
        if (start.next === null) {
            return start;
        }
        // Split one list into two halves.
        let temp = start; // The end of the first half.
        let slow = start; // The start of the second half.
        let fast = start;
        while (fast !== null) {
            temp = slow;
            slow = slow.next;
            fast = fast.next;
            if (fast !== null) {
                fast = fast.next;
            }
        }
        temp.next = null;
        const firstHalf = helper(start);
        const secondHalf = helper(slow);
        return merge(firstHalf, secondHalf);
    };
    const merge = (list1, list2) => {
        const sentinal = new ListNode(null, null);
        let current = sentinal;
        let current1 = list1;
        let current2 = list2;
        while (current1 !== null && current2 !== null) {
            if (current1.val <= current2.val) {
                current.next = current1;
                current = current.next;
                current1 = current1.next;
            } else {
                current.next = current2;
                current = current.next;
                current2 = current2.next;
            }
        }
        while (current1 !== null) {
            current.next = current1;
            current = current.next;
            current1 = current1.next;
        }
        while (current2 !== null) {
            current.next = current2;
            current = current.next;
            current2 = current2.next;
        }
        return sentinal.next;
    };
    return helper(head);
};