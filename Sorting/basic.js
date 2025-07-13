// 1] find a target value and return its index using linear search;
const prompt=require('prompt-sync')();






// let arr=[1,2,3,4,5,6,45,67,89,0];
// let target= Number(prompt("Enter target "));
// let index=-1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         index=i;
//         break;
//     }
// }
// if(index!=-1){
//     console.log("element found at index ", index);   
// }
// else{
//     console.log("elemnt does not found");
// }













// 2] Binary sort







// let arr=[12,45,6,7,8,90,41];
// arr=arr.sort((a,b)=> a-b);
// let target=Number(prompt("enter target "));
// if(BinarySearch(arr,target)==-1) console.log("element not found");
// else console.log("Element found");





// function BinarySearch(arr,target){
//     let s=0, e=arr.length-1;
  
//     while(s<=e){
//           let mid=Math.floor((s+e)/2);
//         if(arr[mid]==target) return mid;
//         else if(arr[mid]>target) e=mid-1;
//         else s=mid+1
//     }
//     return -1;
// }
















// 2] Bubble sort 





// let arr=[5,10,101,3,1,9,7,2];
// for(let i=0;i<arr.length-1;i++){
    
//     for(let j=0;j<arr.length-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j+1];
//             arr[j+1]=arr[j];
//             arr[j]=temp;
//         }
        
//     }
// }
// console.log(arr);



















// 3] Selection Sort 






// let arr=[10,5,3,2,9,8];
// for(let i=0;i<arr.length-1;i++){
//     let minIndex=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[minIndex]) minIndex=j;
//     }
//     if(minIndex!=i){
//         let temp=arr[i];
//         arr[i]=arr[minIndex];
//         arr[minIndex]=temp
//     }
// }
// console.log(arr);

