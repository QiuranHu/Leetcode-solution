/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    add(word) {
        let current = this.root;
        const charactersArray = word.split('');
        for (let character of charactersArray) {
            const lookUpResult = current.characters.get(character);
            if (!lookUpResult) {
                let newCurrent = new TrieNode();
                current.characters.set(character, newCurrent);
                current = newCurrent;
            } else {
                current = lookUpResult;
            }
        }
        current.isPresent = true;
    }
}

class TrieNode {
    constructor() {
        this.characters = new Map();
        this.isPresent = false;
    }
}

var findWords = function (board, words) {
    const trie = new Trie();
    for (let word of words) {
        trie.add(word);
    }
    const answer = [];
    const dfs = (x, y, trieNode, word) => {
        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
            return;
        }
        const character = board[x][y];
        const lookUpResult = trieNode.characters.get(character);
        if (!lookUpResult) {
            return;
        }
        else {
            word = word + character;
            if (lookUpResult.isPresent) {
                lookUpResult.isPresent = false;
                answer.push(word);
            }
            board[x][y] = '#';
            dfs(x - 1, y, lookUpResult, word);
            dfs(x + 1, y, lookUpResult, word);
            dfs(x, y + 1, lookUpResult, word);
            dfs(x, y - 1, lookUpResult, word);
            board[x][y] = character;
        }
    }
    for (let x = 0; x < board.length; x += 1) {
        for (let y = 0; y < board[0].length; y += 1) {
            dfs(x, y, trie.root, '')
        }
    }
    return answer;
};
