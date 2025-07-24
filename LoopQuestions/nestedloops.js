const prompt=require("prompt-sync")()
let n=Number(prompt("Enter a number"))




// 1] Right angle triangle;

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 



// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("* ")

//     }
//     console.log("");
    
// }









// 2]

// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5




// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(j +" ");
//     }
//     console.log("");
    
// }












// 3] Inverted right angle triangle




// for(let i=n;i>=1;i--){
//     for(j=1;j<=i;j++){
//         process.stdout.write("* ");
//     }
//     console.log("");
    
// }













//4] A
// AB
// ABC
// ABCD
// ABCDE





// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(64+j));
//     }
//     console.log("");

// }













//5] mirrored right anglel triangle




// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ");
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("*");
//     }
//     console.log("");
    
// }











//6] pyramid 
//    * 
//    * *
//   * * *
//  * * * *
// * * * * *






// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ");
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("* ");
//     }
//     console.log("");
    
// }










//7] print X






// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j==n+1) process.stdout.write("*");
        
//        else process.stdout.write(" ");
//     }
//     console.log("");
    
// }











//8] print V






for(let i=1;i<=n;i++){
    for(let j=1;j<=(n*2)-1;j++){
        if(i==j || i+j==n*2) process.stdout.write("*");
        else process.stdout.write(" ");
    }
    console.log("");
    
}

