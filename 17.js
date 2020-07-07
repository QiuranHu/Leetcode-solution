/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    };
    class LinkedList {
        constructor() {
            this._sentinel = new Node(null);
            this.size = 0;
        }
        addFirst(value) {
            const node = new Node(value);
            node.next = this._sentinel.next;
            this._sentinel.next = node;
        }
        getFirst() {
            return this._sentinel.next;
        }
        toArray() {
            const arr = [];
            let cur = this.getFirst();
            while(cur !== null){
                arr.push(cur.value);
                cur = cur.next;
            }
            return arr;
        }
    };
    let list = new LinkedList();
    const map = new Map();
    map.set(2, ['a', 'b', 'c']);
    map.set(3, ['d', 'e', 'f']);
    map.set(4, ['g', 'h', 'i']);
    map.set(5, ['j', 'k', 'l']);
    map.set(6, ['m', 'n', 'o']);
    map.set(7, ['p', 'q', 'r', 's']);
    map.set(8, ['t', 'u', 'v']);
    map.set(9, ['w', 'x', 'y', 'z']);
    if(digits.length === 0) {
        return [];
    }
    list.addFirst('');
    for(let i = 0; i < digits.length; i++){
        let newList = new LinkedList();
        let cur = list.getFirst();
        while(cur !== null) {
            const value = cur.value;
            for(let str of map.get(Number(digits[i]))) {
                const newValue = value + str;
                newList.addFirst(newValue);
            }
            cur = cur.next;
        }
        list = newList;
    }
    return list.toArray();
};