// Closures 

/* Q1
Write a function createHelloWorld. It should return a new function that always returns "Hello World".

Example 1:
Input: args = []

Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
*/

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
        
    }
};

/* Q2
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Example 1:

Input: 
n = 10 
["call","call","call"]

Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
 */

var createCounter = function(n) {
    let counter = n;
    return function() {
        return counter++;
    };
};

/* Q3
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.

*/

var expect = function(val) {
    return {
    toBe : function (n){
      if(n === val) return true;
      else throw new Error("Not Equal");
    },
    notToBe : function (n){
        if(n !== val) return true;
        else throw new Error("Equal");
    }
    };
};

/* Q4 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
 */

var createCounter = function(init) {
    let counter = init;
    return {                                              // another way of returning objects in js
        increment(){                     
         return ++counter;
        },
        decrement(){
        return --counter;
        },
        reset(){
        counter = init;
        return counter;
        }
    }   
};


//NOTES: 
/**
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
 */