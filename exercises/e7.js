// EXERCISE 7
// Return an array with a bank account object with the lowest balance 
// but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', 
// balance: 32, ... }]

import { bankAccounts } from "../data/data.js";

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...

  let leastBalance = [];
  for (let user of array) {
    if (user.balance <= 0) {
      continue;
    } else if (leastBalance.length === 0) {
      leastBalance[0] = user;
    } else if (user.balance < leastBalance[0].balance) {
      leastBalance[0] = user;
    }
  }
  
  return leastBalance;
}

console.log(getClientWithLeastPositiveBalance(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command 
// after you've fixed the function