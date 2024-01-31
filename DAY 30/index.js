//a function called maxSubarraySum takes an array as its input

function maxSubarraySum(arr) {
    //keep track of the maximum sum
    let maxSum = 0;
    //keep track of the current sum
    let currentSum = 0;

    //loops through each element of arr
    for (let i = 0; i < arr.length; i++) {
        //adds each element to the current sum
        currentSum += arr[i];
        //if current sum is greater than maximum sum, it updates the value of maximum sum to current sum
    if (currentSum > maxSum) {
        maxSum = currentSum;
        //if current sum is less than zero, that is if the current sum is a negative number the current sum will be zero
    } else if (currentSum < 0) {
        currentSum = 0;
    }
    }

    //once the loop finishes the function returns the maximum sum 
    return maxSum;
}


console.log(maxSubarraySum( [1, 2, -3, 4, -1, 2, 1, -5, 4])); //output is 6

//6 comes from
/*  1 + 2 + -3 + 4 + -1 + 2 + 1 = 6
    4 + -1 + 2 + 1 = 6*/



//[1, 2, -3, 4, -1, 2, 1, -5, 4]
//starting from 1
/* 1 = 1
    1 + 2 = 3
    1 + 2 + -3 = 0
    1 + 2 + - 3 + 4 = 4
    1 + 2 + - 3 + 4 + -1 = 3
    1 + 2 + -3 + 4 + -1 + 2 = 5
    1 + 2 + -3 + 4 + -1 + 2 + 1 = 6
    1 + 2 + -3 + 4 + -1 + 2 + 1 + -5 = 1
    1 + 2 + -3 + 4 + -1 + 2 + 1 + -5 + 4 = 5*/


//starting from 2
/* 2 =2
    2 + -3 = -1
    2 + -3 + 4 = 3
    2 + -3 + 4 + -1 = 2
    2 + -3 + 4 + -1 + 2 = 4
    2 + -3 + 4 + -1 + 2 + 1 = 5
    2 + -3 + 4 + -1 + 2 + 1 + -5 = 0
    2 + -3 + 4 + -1 + 2 + 1+ -5 + 4 = 4*/


//starting from -3
/* -3 = -3
    -3 + 4 = 1
    -3 + 4 + -1 = 0
    -3 + 4 + -1 + 2 = 2
    -3 + 4 + -1 + 2 + 1 = 3
    -3 + 4 + -1 + 2 + 1 + -5 = -2
    -3 + 4 + -1 + 2 + 1 + -5 + 4 = 2*/


//starting from 4
/* 4 = 4
    4 + -1 = 3
    4 + -1 + 2 = 5
    4 + -1 + 2 + 1 = 6
    4 + -1 + 2 + 1 + -5 = 1
    4 + -1 + 2 + 1 + -5 + 4 = 5*/


//starting from -1
/* -1 = -1
    -1 + 2 = 1
    -1 + 2 + 1 = 2
    -1 + 2 + 1 + -5 = -3
    -1 + 2 + 1 + -5 + 4 = 1 */


//starting from 2
/* 2 = 2
    2 + 1 = 3
    2 + 1 + -5 = -2
    2 + 1 + -5 + 4 = 2 */


//starting from 1
/*  1 = 1
    1 + -5 = -4
    1 + -5 + 4 = 0 */


//starting from -5
/*  -5 = -5
    -5 + 4 =  -1 */


//starting from 4
// 4 = 4