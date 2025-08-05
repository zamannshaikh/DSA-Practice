let prompt = require('prompt-sync')();

let n=Number(prompt("Enter number "))


// 1] sum of n using recursion






// function sum(n){
//     if(n==1) return 1;
//     return n+ sum(n-1)
// }
// console.log(sum(n));









// 2] factorial of a number using recursion



// function fact(n) {
//     if(n==1) return 1;
//     return n* fact(n-1)
// }
// console.log(fact(n));











// 3] fibonacci series up to n using loop 




// let first=0 , second=1;
// process.stdout.write(first +" " + second + " ");
// for(let i=1;i<=n-2;i++){
//     let third=first+second;
//     process.stdout.write(third +" ");
//     first=second;
//     second=third
// }









// 4] fibonacci series up to n using recursion 


// let first=0 ,second=1;
// process.stdout.write(first+" "+second+" ")
// function fibonacci(n,first,second){
//     if(n==0) return
//     let third = first+second;
//     process.stdout.write(third+" ");
//     fibonacci(n-1,second,third)
// }
// fibonacci(n-2,first,second)





// 5] sum up to n of fibonacci series



// function fiboSum(n,memo={}){
//     if(n in memo) return memo[n]
//     if(n==0) return 0
//     if(n==1) return 1
//     memo[n]=fiboSum(n-1,memo)+fiboSum(n-2);
//     return memo[n]
// }
// console.log(fiboSum(n))
  