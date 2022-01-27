/*

Recursion is when a function calls itself until someone stops it. If no one stops it then it'll recurse (call itself) forever.

VISUAL EXAMPLE - https://www.programiz.com/javascript/recursion
 
*/

/**
 * Fibonacci sequence with while loop
 * @param {number} num Number to solve for
 * @returns fibanacci sequence index
 */
function fibWhile(num){
  let a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

/**
 * Fibonacci sequence using recursion
 * @param {number} num Number to solve for
 * @returns fibanacci sequence index
 */
function fibRecur(num) {
  if (num <= 1) return 1;

  return fibRecur(num - 1) + fibRecur(num - 2);
}