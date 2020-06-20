/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let isEmptyArrayExist = false;
    let nonEmptyArray;
    if(nums1.length === 0 && nums2.length !== 0) {
        isEmptyArrayExist = true;
        nonEmptyArray = nums2;
    } else if(nums1.length !== 0 && nums2.length === 0) {
        isEmptyArrayExist = true;
        nonEmptyArray = nums1;
    }
    if(isEmptyArrayExist) {
        const length = nonEmptyArray.length;
        if(length % 2 === 0) {
            const index = Math.floor(length / 2) - 1;
            return (nonEmptyArray[index] + nonEmptyArray[index + 1]) / 2;
        }
        else {
            const index = Math.floor((length + 1) / 2) - 1;
            return nonEmptyArray[index];
        }
    }
    // x is the index of the break line.
    // x + 1 is the index of the element after the line
    // x is the index of the element before the line
    let start = -1;
    let end = nums1.length - 1;
    if(nums1.length > nums2.length) {
        start = Math.floor((nums1.length - nums2.length + 1) / 2) - 1;
        end = Math.floor((nums1.length + nums2.length + 1) / 2) - 1;
    } else {
        start = -1;
        end = nums1.length - 1;
    }
    // console.log(start);
    // console.log(end);
    while(start <= end) {
        const middle = Math.floor((start + end) / 2);
        const numberOfElementsOnTheLeft1 = middle + 1;
        const numberOfElementsOnTheRight1 = nums1.length - numberOfElementsOnTheLeft1;
        const numberOfElementsOnTheLeft2 = Math.floor((nums1.length + nums2.length + 1) / 2) - numberOfElementsOnTheLeft1;
        const numberOfElementsOnTheRight2 = nums2.length - numberOfElementsOnTheLeft2;
        // console.log(numberOfElementsOnTheLeft1)
        // console.log(numberOfElementsOnTheRight1)
        // console.log(numberOfElementsOnTheLeft2)
        // console.log(numberOfElementsOnTheRight2)
        // console.log()
        // We need max of the left < min of the right.
        let maxLeft;
        let minRight;
        if(numberOfElementsOnTheLeft1 !== 0) {
            maxLeft = nums1[numberOfElementsOnTheLeft1 - 1];
        }
        if(numberOfElementsOnTheLeft2 !== 0) {
            if(maxLeft !== undefined) {
                maxLeft = Math.max(nums2[numberOfElementsOnTheLeft2 - 1], maxLeft);
            }
            else {
                maxLeft = nums2[numberOfElementsOnTheLeft2 - 1];
            }
        }
        
        if(numberOfElementsOnTheRight1 !== 0) {
            minRight = nums1[numberOfElementsOnTheLeft1];
        }
        if(numberOfElementsOnTheRight2 !== 0) {
            if(minRight !== undefined) {
                minRight = Math.min(minRight, nums2[numberOfElementsOnTheLeft2]);
            } else {
                minRight = nums2[numberOfElementsOnTheLeft2];
            }
        }
        if(minRight === undefined) {
            return maxLeft;
        }
        if(maxLeft <= minRight) {
            if((nums1.length + nums2.length) % 2 === 0) {
                // console.log(maxLeft)
                // console.log(minRight)
                return (maxLeft + minRight) / 2;
            } else {
                return maxLeft;
            }
        }
        else {
            if(numberOfElementsOnTheLeft1 > 0 && numberOfElementsOnTheRight2 > 0
              && nums1[numberOfElementsOnTheLeft1 - 1] > nums2[numberOfElementsOnTheLeft2]) {
                end = middle - 1;
            } else if(numberOfElementsOnTheRight1 > 0 && numberOfElementsOnTheLeft2 > 0 && nums1[numberOfElementsOnTheLeft1] < nums2[numberOfElementsOnTheLeft2 - 1]) {
                start = middle + 1;
            }
        }
    }
    
};