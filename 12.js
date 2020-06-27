/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numbers = [];
    function addNumber(integer, roman) {
        numbers.push({
            integer,
            roman
        });
    };
    addNumber(1000, "M");
    addNumber(900, "CM");
    addNumber(500, "D");
    addNumber(400, "CD");
    addNumber(100, "C");
    addNumber(90, "XC");
    addNumber(50, "L");
    addNumber(40, "XL");
    addNumber(10, "X");
    addNumber(9, "IX");
    addNumber(5, "V");
    addNumber(4, "IV");
    addNumber(1, "I");
    let resultArr = [];
    for(let i = 0; i < numbers.length; i++){
        if(num >= numbers[i].integer) {
            resultArr.push(numbers[i].roman.repeat(Math.floor(num / numbers[i].integer)));
            num = num % numbers[i].integer;
        }
    }
    return resultArr.join("");
};