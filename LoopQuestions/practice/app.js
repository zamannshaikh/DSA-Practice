// 1. ISBN Number

// Description: An ISBN (International Standard Book Number) is a unique 10-digit
// number assigned to books. The ISBN is valid if the sum of its digits, each
// multiplied by its position (1 to 10), is divisible by 11.



// let n = Number(prompt("enter 10 digit number"));

// if (n.length !== 10 || isNaN(Number(n))) {
//   console.log("Invalid input: Enter exactly 10 digits.");
// } else {
//   for (let i = 10; i >= 1; i--) {
//     lastDigit = n % 10;
//     sum += lastDigit * i;
//     n = Math.floor(n / 10);
//   }
//   if (sum % 11 == 0) console.log("Valid Input");
//   else console.log("Invalid Input");
// }




















// 2. HCF/GCD

// Description: The Highest Common Factor (HCF) or Greatest Common Divisor
// (GCD) of two numbers is the largest number that divides both numbers
// without leaving a remainder.




// let a=prompt('enter first number');
// let b=prompt('enter second number');
// let temp;
// if(b>a){
//     let tem=b;
//     b=a;
//     a=tem;
// }
// function gcd(a,b){
//     while(b){
//         temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;
// }
// console.log(gcd(a,b));




















// 3. Harshad Number

// Description: A number is a Harshad number if it is divisible by the sum of its
// digits.

// Example\
// P Input: 1+
// P Output: Harshad Numbea
// P Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.

// Hint: Extract digits using modulo (%) and integer division (//).








// let n=Number(prompt('enter a number'));
// let copy=n;
// let sum=0;
// let lastDigit;

//     while(n>0){
//     lastDigit=n%10;
//     sum+=lastDigit;
//     n=Math.floor(n/10);
//     }
//     if(copy%sum==0) console.log('Harshad Number');
//     else console.log('not Harshad number');
    


















// 5. Abundant Number

// Description: A number is abundant if the sum of its proper divisors is greater
// than the number itself.

// Example\
// P Input: 12
// P Output: Abundant Numbea
// P Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).

// Hint: Use a loop to find proper divisors.






// let n=Number(prompt("enter a number"));
// let sum=1;
// for(let i=2;i<=n/2;i++){
//     if(n%i==0) sum+=i;
// }
// if(sum>n) console.log('Abundant Number');
// else console.log('Not Abundant Number');















// 4. Perfect Square

// Description: A number is a perfect square if it is the square of an integer.

// Example\
// P Input: 25
// P Output: Perfect SquarN
// P Explanation: 5 × 5 = 25.

// Hint: Use sqrt(N), check if it’s an integer.





// let n=Number(prompt('enter a number'));
// let sq=Math.sqrt(n);
// if(sq==Math.ceil(sq)) console.log("Perfect Square");
// else console.log("Not a Perfect square")




















// 6. Fibonacci Series using Loop

// Description: Print Fibonacci series up to N terms using a loop.






// let n=Number(prompt("Enter a number"));
// let a=0,b=1;


//     for(let i=0;i<n;i++){
//         console.log(a);
//         let next =a+b;
//         a=b;
//         b=next;
//     }














function countDivisors(n) {
    let count = 1;
    let num = n;

    for (let i = 2; i * i <= num; i++) {
        let power = 0;
        while (n % i === 0) {
            n = Math.floor(n / i);
            power++;
        }
        count *= (power + 1);
    }

    // If n is a prime > sqrt(original n)
    if (n > 1) count *= 2;

    return count;
}

function findNumbersWithXDivisors(X, limit) {
    let result = [];

    for (let i = 1; i <= limit; i++) {
        if (countDivisors(i) === X) {
            result.push(i);
        }
    }

    return result;
}

// Example usage:
let X = 3;
let limit = 100;
console.log("Numbers with exactly", X, "divisors:", findNumbersWithXDivisors(X, limit));

