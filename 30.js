/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

    if(s === '') {
        return [];
    }
    
    if(words.length === 0) {
        return [];
    }
    const answer = [];
    const lengthOfWord = words[0].length;
    let leftPointer = 0;

    while(leftPointer + words.length * lengthOfWord <= s.length) {
        let rightPointer = leftPointer;
        const map = new Map();
        // map is a hash map of unfound words.
        // The key is the word.
        // The value is the number that word appears.
    
        // Add all words into map.
        for(let s of words){
            if(map.has(s)) {
                map.set(s, map.get(s) + 1);
            } else {
                map.set(s, 1);
            }
        }
        // Move the rightPointer until it cannot forward.
        while(rightPointer + lengthOfWord <= s.length) {

            const subString = s.substr(rightPointer, lengthOfWord);
            if(!map.has(subString)) {
                break;
            } else {
                if(map.get(subString) > 1) {
                    map.set(subString, map.get(subString) - 1);
                } else {
                    map.delete(subString);
                }
            }
            rightPointer += lengthOfWord;
        }

        // Examine if we have a valid answer.
        if(map.size === 0) {
            answer.push(leftPointer);
        }
        if(rightPointer !== leftPointer) {
            // Add the word at the left to the map.
            const wordToAdd = s.substr(leftPointer, lengthOfWord);
            if(!map.has(wordToAdd)) {
                map.set(wordToAdd, 1);
            } else {
                map.set(wordToAdd, map.get(wordToAdd) + 1);
            }
        }
        leftPointer += 1;
        
    }
    return answer;
};