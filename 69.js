/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Since the result must be a number between 0 and x.
    // We can do a binary search between 0 and x.
    // start: inclusive
    // end: inclusive
    function helper(start, end, x) {
        const middle = Math.floor((start + end) / 2);
        if(middle * middle <= x && (middle + 1) * (middle + 1) > x) {
            return middle;
        }
        else if(middle * middle > x) {
            return helper(start, middle - 1, x);
        } else {
            return helper(middle + 1, end, x);
        }
    }
    return helper(0, x, x);
};