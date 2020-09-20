/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    const strCompare = (num1, num2) => {
        let cnt = 0;
        while (cnt < num1.length && cnt < num2.length) {
            if (Number(num1[cnt]) < Number(num2[cnt])) {
                return -1;
            } else if (Number(num1[cnt]) > Number(num2[cnt])) {
                return 1;
            }
            cnt += 1;
        }
        if (cnt === num1.length) {
            if (cnt === num2.length) {
                return 0;
            } else {
                return compare(num1, (num2.substring(cnt)));
            }
        } else {
            return compare((num1.substring(cnt)), num2);
        }
    };
    const compare = (num1, num2) => {
        num1 = String(num1);
        num2 = String(num2);
        return strCompare(num1, num2);
    };
    nums.sort(compare);
    const answer = nums.reverse().join('');
    if (/^0*$/.test(answer)) {
        return '0';
    } else {
        return answer;
    }
};