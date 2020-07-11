/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) {
        return null;
    }
    function minHeapGenerator() {
        this._keys = [-1];
        // The maximum index is this.size.
        this.size = 0;
        this._swap = function(index1, index2) {
            const temp = this._keys[index1];
            this._keys[index1] = this._keys[index2];
            this._keys[index2] = temp;
        };
        this.add = function(num) {
            let index = this.size + 1;
            this._keys.push(num);
            while(index !== 1) {
                const parent = Math.floor(index / 2);
                if(this._keys[index].val >= this._keys[parent].val) {
                    break;
                } else {
                    this._swap(index, parent);
                    index = parent;
                }
            }
            this.size += 1;
        };
        this.delete = function() {
            if(this.size === 0) {
                return;
            }
            this._swap(1, this.size);
            this.size -= 1;
            const itemToReturn = this._keys.pop();
            let index = 1;
            while(index * 2 <= this.size) {
                let newIndex;
                if(index * 2 + 1 > this.size) {
                    newIndex = index * 2;
                } else {
                    if(this._keys[index * 2].val < this._keys[index * 2 + 1].val) {
                        newIndex = index * 2;
                    } else {
                        newIndex = index * 2 + 1;
                    }
                }
                if(this._keys[newIndex].val < this._keys[index].val) {
                    this._swap(index, newIndex);
                    index = newIndex;
                } else {
                    break;
                }
            }
            return itemToReturn;
            
        };
    };
    
    const minHeap = new minHeapGenerator();
    const answer = new ListNode();
    let cur = answer;
    for(let i = 0; i < lists.length; i ++) {
        if(lists[i] !== null) {
            minHeap.add(lists[i]);
        }
    }
    while(minHeap.size !== 0) {
        const item = minHeap.delete();
        if(item.next !== null){
            minHeap.add(item.next);
        }
        cur.next = item;
        cur = item;
    }
    return answer.next;
};