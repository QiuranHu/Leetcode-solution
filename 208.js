/**
 * Initialize your data structure here.
 */
class Node {
    constructor(isWordPresent) {
        this.isWordPresent = isWordPresent;
        this.characters = new Map();
    }
};
var Trie = function () {
    this.root = new Node(false);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let current = this.root;
    const array = word.split('');
    for (let i = 0; i < array.length; i++) {
        const character = array[i];
        const lookupResult = current.characters.get(character);
        if (!lookupResult) {
            const newNode = new Node(i === array.length - 1 ? true : false);
            current.characters.set(character, newNode);
            current = newNode;
        } else {
            current = lookupResult;
        }
    }
    if (current !== this.root) {
        current.isWordPresent = true;
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let current = this.root;
    for (let character of word.split('')) {
        const lookUpResult = current.characters.get(character);

        if (!lookUpResult) {
            return false;
        } else {
            current = lookUpResult;
        }
    }
    if (current && current.isWordPresent) {
        return true;
    }
    return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let current = this.root;
    for (let character of prefix.split('')) {
        const lookupResult = current.characters.get(character);

        if (!lookupResult) {
            return false;
        } else {
            current = lookupResult;
        }
    }
    if (current !== this.root) {
        return true;
    }
    return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */