//Function Transformations

/* Q8
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
 */

var compose = function(functions) {
    
    return function(x) {
        let ans = x;
        if(functions.length === 0) return x;
        for(let i = functions.length - 1; i >= 0 ; i--){
          ans = functions[i](ans);
        }
        return ans;
    }
};

/* Q9
Write a function argumentsLength that returns the count of arguments passed to it.
 

Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
 */

var argumentsLength = function(...args) {
    return args.length;
};

/*Q10
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 
Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
*/

var once = function(fn) {
    let hasBeenCalled = false;
    return function(...args){
        if(hasBeenCalled){
            return undefined;
        } 
        hasBeenCalled = true;
        return fn(...args);
    }
};

/* Q11 
Given a function fn, return a memoized version of that function. A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made. fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise. factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
 */

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if(cache[key] !== undefined){
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;

    }
}
