/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const sentinal = new ListNode();
    sentinal.next = head;
    let cur = sentinal;
    while(true) {
        const temp = [];
        // temp[0] -- temp[k - 1]
        let shouldBreak = false;
        let p = cur;
        for(let i = 0; i < k; i++) {
            if(p.next) {
                temp.push(p.next);
                p = p.next;
            } else {
                shouldBreak = true;
                break;
            }
        }
        if(temp.length !== k) {
            break;
        }
        temp.push(temp[k - 1].next);
        if(shouldBreak === true) {
            break;
        }
        cur.next = temp[k - 1];
        for(let i = k - 1; i >= 1; i--) {
            temp[i].next = temp[i - 1];
        }
        temp[0].next = temp[k];
        cur = temp[0];
    }
    return sentinal.next;
};