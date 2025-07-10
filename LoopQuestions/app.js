// 1] print natural numbers


// let n = Number(prompt('Enter a number'));
// for(let i=1;i<=n;i++){
//     console.log(i);
// }
// end


// start- take an input from user and print its table 


// var n =Number(prompt('enter number'));
// for(let i=1;i<=10;i++){
//     console.log(`${n}x${i}=`,n*i);
// }


//end


//start- sum up to n terms

// var n =Number(prompt('enter a number'));
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum+=i;   
// }
//  console.log(sum);


//end


//start-> factorial of a number

// var n=Number(prompt('enter a number'))
// let fact =1;
// for(let i=1;i<=n;i++){
//     fact*=i;
// }
// console.log(fact);


//End

//start-> print sum of even and odd numbers up to n



// var n =Number(prompt('enter a number'))
// let even=0;
// let odd=0;
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         even+=i;
//     }
//     else{
//         odd+=i;
//     }
// }
// console.log('sum of even numbers=',even)
// console.log('sum of odd numbers =',odd);




//end



//start->prime number or not


// let n=Number(prompt('enter a number'));
// let isPrime=true;
// for(let i=2;i<n/2;i++){
//     if(n%i==0){
//         isPrime=false;
//         break;
//     }
// }
// if(isPrime) console.log('prime number');
// else console.log('not a prime number')


//end





//start-> best approch to solve prime number question


// let n = Number(prompt('enter a number'));
// let isPrime=isPrimeFunc()
// if(isPrime) console.log('prime number');
// else console.log('not a prime number');
// function isPrimeFunc(){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
//         if(n%i==0) return false;
        
//     }
//     else return true;

// }
