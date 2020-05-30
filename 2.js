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
    let result = null;
    let pointerInResult = null;
    let pointerInL1 = l1;
    let pointerInL2 = l2;
    let add = 0;
    while(pointerInL1 !== null && pointerInL2 !== null) {
        let value = pointerInL1.val + pointerInL2.val + add;
        if(value >= 10) {
            add = Math.floor(value / 10);
            value = value % 10;
        } else {
            add = 0;
        }
        pointerInL1 = pointerInL1.next;
        pointerInL2 = pointerInL2.next;
        if(pointerInResult === null) {
            result = new ListNode(value, null);
            pointerInResult = result;
        }
        else {
            pointerInResult.next = new ListNode(value, null);
            pointerInResult = pointerInResult.next;
        }
    }
    let notNullPointer = null;
    if(pointerInL1 !== null) {
        notNullPointer = pointerInL1;
    }
    if(pointerInL2 !== null) {
        notNullPointer = pointerInL2;
    }
    while(notNullPointer !== null) {
        let value = notNullPointer.val + add;
        if(value >= 10) {
            add = Math.floor(value / 10);
            value = value % 10;
        } else {
            add = 0;
        }
        notNullPointer = notNullPointer.next;
        if(pointerInResult === null) {
            result = new ListNode(value, null);
            pointerInResult = result;
        }
        else {
            pointerInResult.next = new ListNode(value, null);
            pointerInResult = pointerInResult.next;
        }
    }
    while(add !== 0) {
        pointerInResult.next = new ListNode(add % 10, null);
        pointerInResult = pointerInResult.next;
        add = Math.floor(add / 10);
    }
    return result;
};