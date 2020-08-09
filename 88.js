/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let cur1 = 0;
    let cur2 = 0;
    const move = (cur1) => {
        for (let i = 1; nums1.length - i > cur1; i++) {
            // index in nums1: nums1.length - i
            const index = nums1.length - i;
            nums1[index] = nums1[index - 1];
        }
    }
    while (cur1 < nums1.length && cur2 < nums2.length) {
        if (nums1[cur1] <= nums2[cur2]) {
            cur1 += 1;
        } else {
            move(cur1);
            nums1[cur1] = nums2[cur2];
            cur2 += 1;
            cur1 += 1;
        }
    }
    if (cur2 < nums2.length) {
        for (let i = 1; nums2.length - i >= cur2; i++) {
            // Index in nums1: nums1.length - i
            // Index in nums2: nums2.length - i
            nums1[nums1.length - i] = nums2[nums2.length - i];
        }
    }
};