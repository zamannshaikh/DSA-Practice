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














//3] method 3 using recursion







// class Main {
//     public static void main(String[] args) {
//         System.out.print(gcd(16,24));
//     }
//     public static int gcd(int a,int b){
//         if(a==b) return a;
//         if(a>b) return gcd(a-b,b);
//         else return gcd(a,b-a);
//     }
    
// }







//4] method 4 of solving gcd

// class Main {
//     public static void main(String[] args) {
//         System.out.print(gcd(16,32));
//     }
//     public static int gcd(int a,int b){
//       if(b==0) return a;
//       else return gcd(b,a%b);
//     }
    
// }








//5] count of prime numbers in n(Sieve of Eratosthenes)







// import java.util.Scanner;
// import java.util.Arrays;


// public class math{
//     public static void main(String[] args){
//         Scanner sc=new Scanner(System.in);
//         int n=sc.nextInt();
//         boolean arr[]=new boolean[n+1];
//         Arrays.fill(arr,true);
//         for(int i=2;i<=Math.sqrt(n);i++){
//             if(arr[i]){
//                 for(int j=i*i;j<=n;j+=i){
//                     arr[j]=false;
//                 }

//             }
//         }
//         for(int i=2;i<arr.length;i++){
//             if(arr[i]){
//                 System.out.print(i+" ");
//             }
            
//         }
//     }
// }