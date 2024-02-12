
function sums(nums) {
    let runningsum = [];
    let arr = 0;
    
    for (let i = 0; i < nums.length; i++)
    {
        arr += nums[i];
        runningsum.push(arr);
    }
    return runningsum;
};

let nums1 = [1, 2, 3, 4];
console.log(sums(nums1));

let nums2 = [1, 1, 1, 1, 1];
console.log(sums(nums2));

let nums3 = [3, 1, 2, 10, 1];
console.log(sums(nums3));