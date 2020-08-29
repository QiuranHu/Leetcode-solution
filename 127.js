/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    // BFS, use a queue.
    wordSet = new Set();
    for (let word of wordList) {
        wordSet.add(word);
    }
    if (!wordSet.has(endWord)) {
        return 0;
    }
    let queue = [];
    queue.push(beginWord);
    let level = 1;

    while (queue.length !== 0) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            // Iterate through the items in current level
            const word = queue.shift();
            const wordArray = word.split('');
            for (let j = 0; j < wordArray.length; j++) {
                for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode += 1) {
                    const char = String.fromCharCode(charCode);
                    if (char === wordArray[j]) continue;
                    const temp = wordArray[j];
                    wordArray[j] = char;
                    const newWord = wordArray.join('');
                    if (endWord === newWord) return level + 1;
                    if (wordSet.has(newWord)) {
                        queue.push(newWord);
                        wordSet.delete(newWord);
                    }
                    wordArray[j] = temp;
                }
            }
        }
        level += 1;
    }
    return 0;
};