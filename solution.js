function numsSumEqualsTarget(nums, target) {
    // Initializing the outer loop to start from the 0th index of the array.
    for(let i = 0; i < nums.length; i++){
        // Initializing inner loop to start from 1st index of the array.
        for(let j = i+1; j < nums.length; j++){
            // Adding together the previous and next number.
            let numsSum = nums[i] + nums[j];
            // Checking if the sum of the two numbers equals target.
            if(numsSum == target){
                return [nums[i], nums[j]]
            }
        }
    }
};
console.log(numsSumEqualsTarget([2,7,11,15],9));