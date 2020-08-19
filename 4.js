/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // We want nums1 to be the shorter array 
    // and nums2 to be the longer array.
    if(nums1.length > nums2.length) {
        let temp = nums2;
        nums2 = nums1;
        nums1 = temp;
    }
    // If the index is 0, the divider is a line on the left of 0.
    let start = 0;
    let end = nums1.length;
    const combinedLength = nums1.length + nums2.length;
    while(start <= end) {
        let divider1 = Math.floor((start + end) / 2); // Number of elements before divider = divider1.
        let numberLeft1 = divider1;
        let numberLeft = Math.floor((combinedLength + 1) / 2); // Number of elements on the left side. + 1 because I want in odd cases there is one more element on the left.
        let numberLeft2 = numberLeft - numberLeft1;
        let left1;
        let left2;
        if(numberLeft1 === 0) {
            left1 = Number.NEGATIVE_INFINITY;
        } else {
            left1 = nums1[numberLeft1 - 1];
        }
        
        if(numberLeft2 === 0) {
            left2 = Number.NEGATIVE_INFINITY;
        } else {
            left2 = nums2[numberLeft2 - 1];
        }
        
        let right1;
        let right2;
        if(numberLeft1 === nums1.length) {
            right1 = Number.POSITIVE_INFINITY;
        } else {
            right1 = nums1[numberLeft1];
        }
        
        if(numberLeft2 === nums2.length) {
            right2 = Number.POSITIVE_INFINITY;
        } else {
            right2 = nums2[numberLeft2];
        }
        
        if(left1 <= right2 && left2 <= right1) {
            if(combinedLength % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if(left1 > right2) {
            end = divider1 - 1;
        } else {
            start = divider1 + 1;
        }
    }
};