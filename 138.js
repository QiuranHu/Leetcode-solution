/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    const map = new Map();
    let copy;
    if (head) {
        copy = new Node(head.val, null, null);
    } else {
        return null;
    }
    let currentInCopy = copy;
    let currentInOriginal = head;
    let index = 0;
    while (currentInOriginal !== null) {
        if (currentInOriginal.next) {
            currentInCopy.next = new Node(currentInOriginal.next.val, null, null);
        }
        currentInOriginal.index = index;
        map.set(index, currentInCopy);
        index += 1;
        currentInOriginal = currentInOriginal.next;
        currentInCopy = currentInCopy.next;
    }
    currentInOriginal = head;
    currentInCopy = copy;
    while (currentInOriginal !== null) {
        if (currentInOriginal.random === null) {
            currentInCopy.random = null;
        } else {
            const indexOfRandom = currentInOriginal.random.index;
            currentInCopy.random = map.get(indexOfRandom);
        }
        currentInOriginal = currentInOriginal.next;
        currentInCopy = currentInCopy.next;
    }
    return copy;
};