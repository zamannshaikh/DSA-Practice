const prompt = require("prompt-sync")();



// 1] find 2nd max elemnt from an array

// let arr=[12,45,6,8,9,34];
// let max=Math.max(arr[0],arr[1]);
// let smax=Math.min(arr[0],arr[1]);
// for(let i=2;i<arr.length;i++){
//     if(arr[i]>max){
//         smax=max;
//         max=arr[i];
//     }
//     else if(arr[i]>smax && arr[i]!=max){
//         smax=arr[i];
//     }

// }
// console.log(smax);

// 2] find max element and its index

// let arr=[2,96,69,77,145,20];
// let max=arr[0];
// let index=0;
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//         index=i;
//     }
// }
// console.log(max,index)

//3] All zeros in left and all ones  in rigth

// let arr=[1,1,0,0,0,1,0,0,1,1];
// let i=0,j=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         j++;
//     }
// }
// console.log(arr)

//4] shift elements to left by 1;

// let arr=[1,2,3,4,5,6];
// let temp=arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=temp;
// console.log(arr);

//5] shift elemnt to right by 1

// let arr=[1,2,3,4,5,6];
// let temp=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1];
// }
// arr[0]=temp;
// console.log(arr);

//6] shift elements to left by k (brute force approch);
//approch : since we know how an element shifts to left by 1 , if we want to
//shift it 2 times we can repeat this process one more time therefore it
//concludes that we can shift it k times by using a loop that will shift the
//array





// let arr = [1, 2, 3, 4, 5, 6];
// let k=Number(prompt("enter k"));
// k=k%arr.length;
// for(let i=1;i<=k;i++){
//     let temp=arr[0];
//     for(let j=0;j<arr.length-1;j++){
//         arr[j]=arr[j+1];
//     }
//     arr[arr.length-1]=temp;
// }
// console.log(arr);







// 7] shift the element to left by k (optimized version);
// Aproach : we can create a new empty array and push the values depending on
// the value of k and we will use % arr.length so that it wraps around









// let arr=[1,2,3,4,5,6];
// let k= Number(prompt("enter the value of k "));
// k=k%arr.length;
// let temp=[];
// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length];
// }
// console.log(temp);











// 8] shift the elements by k times (most optimized version)( also known as
// block swap reverse algorithm)



// let arr=[1,2,3,4,5,6];
// let k=Number(prompt("Enter k "));
// k=k%arr.length;
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// reverse(arr,0,arr.length-1);



// function reverse(arr,start,end){
//  while(start<end){
//     let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]= temp;
//     start++
//     end--
//  }
// }
// console.log(arr)











// 9] right shift elements of an array by k;






// let arr=[1,2,3,4,5];
// let k= Number(prompt("enter k "));
// k=k% arr.length;
// reverse(arr,0,arr.length-1);
// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// console.log(arr);


// function reverse(arr,start,end){
//    while(start<end){
//      let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]= temp;
//     start++
//     end--
//    }
// }



















