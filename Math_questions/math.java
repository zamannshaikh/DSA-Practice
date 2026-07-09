// //1] gcb (Method 1)
// class Main {
//     public static void main(String[] args) {
//         int a=16,b=24;
//         for(int i=Math.min(a,b);i>=1;i--){
//             if(a%i==0 && b%i==0){
//                 System.out.print(i);
//                 break;
//             }
//         }
//     }
// }










// 2] Method 2
// class Main {
//     public static void main(String[] args) {
  
//         int a= 16,b=24;
//         while(a !=b){
//             if(a>b) a=a-b;
//             else b=b-a;
//         }
//         System.out.print(a);
//     }
// }