/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntMap = new Map();
    romanToIntMap.set("M", 1000);
    romanToIntMap.set("CM", 900);
    romanToIntMap.set("CD", 400);
    romanToIntMap.set("D", 500);
    romanToIntMap.set("C", 100);
    romanToIntMap.set("XC", 90);
    romanToIntMap.set("L", 50);
    romanToIntMap.set("XL", 40);
    romanToIntMap.set("X", 10);
    romanToIntMap.set("IX", 9);
    romanToIntMap.set("V", 5);
    romanToIntMap.set("IV", 4);
    romanToIntMap.set("I", 1);
    const expectionSet = new Set();
    expectionSet.add("CM");
    expectionSet.add("CD");
    expectionSet.add("XC");
    expectionSet.add("XL");
    expectionSet.add("IX");
    expectionSet.add("IV");
    let result = 0;
    for(let i = 0; i < s.length; i++){
        if(expectionSet.has(s.substr(i, 2))) {
            result += romanToIntMap.get(s.substr(i, 2));
            i += 1;
        } else {
            result += romanToIntMap.get(s.substr(i, 1));
        }
    }
    return result;
};