/**
 * @param {number} capacity
 */
class Node {
    constructor(key, val, next, prev) {
        this.key = key ? key : null;
        this.val = val ? val : null;
        this.next = next ? next : null;
        this.prev = prev ? prev : null;
    }
}
var LRUCache = function (capacity) {
    this.map = new Map();
    this.listStart = new Node();
    this.listEnd = new Node();
    this.listStart.next = this.listEnd;
    this.listEnd.prev = this.listStart;
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = this.listStart;
        node.next = this.listStart.next;
        this.listStart.next.prev = node;
        this.listStart.next = node;
        return node.val;

    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (!this.map.has(key)) {
        if (this.map.size === this.capacity) {
            const nodeToRemove = this.listEnd.prev;
            nodeToRemove.next.prev = nodeToRemove.prev;
            nodeToRemove.prev.next = nodeToRemove.next;
            this.map.delete(nodeToRemove.key);
        }
        const node = new Node(key, value);
        this.map.set(key, node);
        node.next = this.listStart.next;
        node.prev = this.listStart;
        this.listStart.next.prev = node;
        this.listStart.next = node;
    } else {
        const node = this.map.get(key);
        node.val = value;
        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = this.listStart;
        node.next = this.listStart.next;
        this.listStart.next.prev = node;
        this.listStart.next = node;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */