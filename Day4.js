//Promises and Time part-1

/* Q12 
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 
Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
 */

var addTwoPromises = async function (promise1, promise2) {
    const res1 = await promise1;
    const res2 = await promise2;
    // return res1 + res2;

    const ans =  new Promise ((resolve, reject) => {
        resolve(res1 + res2);
    })

    return ans;
};

