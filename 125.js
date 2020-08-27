/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlphanumeric = (index) => {
        const code = s.charCodeAt(index);
        if(code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
            return true;
        }
        if(code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
            return true;
        }
        if(code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
            return true;
        }
        return false;
    }
    let characters = [];
    for(let i = 0; i < s.length; i++) {
        if(isAlphanumeric(i)) {
            characters.push(s[i]);
        }
    }
    characters = characters.map(character => character.toUpperCase());
    let start = 0;
    let end = characters.length - 1;
    while(start <= end) {
        if(characters[start] !== characters[end]) {
            return false;
        } else {
            start += 1;
            end -= 1;
        }
    }
    return true;
};