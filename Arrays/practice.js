//1] find 2nd largest number in an array

// let arr=[15,8,1,2,3,2,11]
// let max=Math.max(arr[0],arr[1]);
// let smax=Math.min(arr[0],arr[1]);
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         smax=max;
//         max=arr[i]
//     }
//     else if(arr[i]>smax){
//         smax=arr[i]
//     }

// }
// console.log("second largest = ",smax)








//2] find max element and its index
// let arr=[15,8,1,2,3,2,114]
// let max =arr[0];
// let index=0;

// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i];
//       index=i;
//     }
   
// }
// console.log(max,index)




//3] All zeros in left and all ones  in rigth

// let arr=[1,1,0,0,0,1,0,0,1,1];

// let j=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         let temp=arr[j];
//         arr[j]=arr[i];
//         arr[i]=temp;
//         j++
//     }
// } 
// console.log(arr)



//4] shift elements to left by 1;

//  let arr=[1,2,3,4,5,6];

// let temp=arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=temp;
// console.log(arr);


//5] shift elemnt to right by 1
// let arr=[1,2,3,4,5,6];
//.     [6,1,2,3,4,5]



// let temp=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1];

// }
// arr[0]=temp;
// console.log(arr)

//6] shift elements to left by k (brute force approch);

// arr=[1,2,3,4,5,6];

// let n=2
// for(let i=0;i<n;i++){
//     let temp=arr[0];
//     for(let j=0;j<arr.length-1;j++){
//         arr[j]=arr[j+1]
//     }
//     arr[arr.length-1]=temp
// }
// console.log(arr);