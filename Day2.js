// Basic Array Transformations

/* Q5 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
 */

var map = function(arr, fn) {
let sol = arr;
let idx = 0;
for(let i of arr){
   sol[idx] = fn(i, idx);
   idx++;
}
return sol;
};

/*Q6
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
Please solve it without the built-in Array.filter method.

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10

NOTE**: There are only 8 specific values in the entire JavaScript language that are considered falsy. If a function returns any of these, JavaScript treats it like a false:
- false
-0 (and -0, 0n)
-"" (an empty string)
-null
-undefined
-NaN (Not a Number)

Everything else in JavaScript is inherently "truthy"—including negative numbers (like -1), objects, arrays, and strings with text.
*/

var filter = function(arr, fn) {
    let filteredArr = [];
    let idx = 0;
    for(let element of arr){
        // /filteredArr[idx] = fn(element, idx);
        let flag = fn(element, idx);
        if(flag){
            // filteredArr[idx] = element; wrong as it leaves empty spaces
            filteredArr.push(element);
        }
        idx++;
    }
    return filteredArr;
};

/* Q7
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
 */

