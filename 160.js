/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getLength = (head) => {
    let length = 0;
    let cur = head;
    while (cur !== null) {
        length += 1;
        cur = cur.next;
    }
    return length;
};
var getIntersectionNode = function (headA, headB) {
    const lengthA = getLength(headA);
    const lengthB = getLength(headB);
    let longer;
    let shorter;
    if (lengthA >= lengthB) {
        longer = headA;
        shorter = headB;
    } else {
        longer = headB;
        shorter = headA;
    }
    for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
        longer = longer.next;
    }
    while (longer !== null) {
        if (longer === shorter) {
            return longer;
        }
        longer = longer.next;
        shorter = shorter.next;
    }
    return null;
};