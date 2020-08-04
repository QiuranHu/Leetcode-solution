/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    function addToMap(character, map) {
        let lookUpResult = map.get(character);
        if(lookUpResult) {
            map.set(character, lookUpResult + 1);
        } else {
            map.set(character, 1);
        }
    }
    // Check if map1 contains everything in map2.
    function validate(map1, map2) {
        for(let character of map2.keys()) {
            if(!map1.get(character) || map1.get(character) < map2.get(character)) {
                return false;
            }
        } 
        return true;
    }
    
    let bestLength = s.length + 1;
    let answer = null;
    
    let mapOfT = new Map();
    for(let character of t) {
        addToMap(character, mapOfT);
    }
    
    let left = 0;
    let right = 0;
    let current = new Map();
    addToMap(s[0], current);
    
    while(true) {
        let shouldBreak = false;
        // Move the right pointer until we get an answer.
        while(!validate(current, mapOfT)) {
            right += 1;
            if(right >= s.length) {
                shouldBreak = true;
                break;
            }
            addToMap(s[right], current);
        }
        
        if(shouldBreak) {
            break;
        }
        
        while(validate(current, mapOfT)) {
            const length = right - left + 1;
            if(length < bestLength) {
                bestLength = length;
                answer = [left, right];
            }
            current.set(s[left], current.get(s[left]) - 1);
            left += 1;
        }
    }
    if(answer !== null) {
        return s.substr(answer[0], answer[1] - answer[0] + 1);
    }
    return '';
};