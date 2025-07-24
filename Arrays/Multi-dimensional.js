const prompt=require('prompt-sync')()

// 1] print elements of arrays in a matrix form





// let arr=[[1,2,3],[4,5,6],[7,8,9]];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         process.stdout.write(`${arr[i][j]} `);
//     }
//     console.log();
    
// }












// 2] take input from user and print in matrix form;

// let rows =Number(prompt("Enter number of rows "));
// let colums=Number(prompt("enter number of colums "));


// let arr= new Array(rows);
// for(let i=0;i<arr.length;i++){
//      arr[i]= new Array(colums);
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j]=Number(prompt(`enter elemts`));
//     }
// }
// console.log(arr);

















// 3] sum of diagonal elements of a n*n matrix





// let martix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// let sum=0;
// for(let i=0;i<martix.length;i++){
//     for(let j=0;j<martix[i].length;j++){
//         if(i==j || i+j==martix.length-1){
//             sum+=martix[i][j]
//         }
        
//     }
// }
// console.log(sum);













// 5] rotate image :






// let  matrix = [[1,2,3],[4,5,6],[7,8,9]]



// for(let i=0;i<matrix.length;i++){
//     for(let j=i;j<matrix[i].length;j++){
//         let temp=matrix[i][j];
//         matrix[i][j]=matrix[j][i];
//         matrix[j][i]=temp;
//     }
// }

















// 6] Spiral matrix :





// let matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// let ans=[];
// let minrow=0;
// let maxrow=matrix.length-1;
// let mincol=0;
// let maxcol=matrix[0].length-1;
// let m=matrix.length,n=matrix[0].length

// while(ans.length<m*n){
//    for(let i=minrow;i<=maxcol;i++){
//     ans.push(matrix[minrow][i]);
//    }
//    minrow++;
//    for(let i=minrow;i<=maxrow;i++){
//     ans.push(matrix[i][maxcol]);
//    }
//    maxcol--
   
//    for(let i=maxcol ; i>=mincol;i--){
//     ans.push(matrix[maxrow][i])
//    }
//    maxrow--
//    for(let i=maxrow;i>=minrow;i--){
//     ans.push(matrix[i][mincol])
//    }
//    mincol++

// }
// console.log(ans)





let x=123;
let copy=x;
let rem,rev=0;
while(x>0){
    rem=x%10;
    rev=(rev*10)+rem;
    x=Math.floor(x/10)

    
}
console.log(typeof(rev));


