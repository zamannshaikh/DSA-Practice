//1] print number from n to 1 using recursion





// class Main {
//     public static void main(String[] args) {
//         int n=10;
//         count(n);
//     }
    
    
    
//         public static void count(int n){
//             if(n==0) return;
//             System.out.println(n);
//             count(n-1);
            
//         }
// }















//2] sum of n numbers using recursion 















// class Main {
//     public static void main(String[] args) {
//         System.out.print(sum(5));
//     }
//     public static int sum(int n){
//         if(n==1) return 1;
//         return n+sum(n-1);
//     }
// }





















//3] factprial using recursionn








// class Main {
//     public static void main(String[] args) {
//         System.out.print(fact(5));
//     }
//     public static int fact(int n){
//         if(n==1) return 1;
//         return n*fact(n-1);
//     }
// }
















//4] print fibonacci series up to n numbers using recursion















// class Main {
//     public static void main(String[] args) {
//         int first=0,second=1;
//         int n=10;
        
//         System.out.print(first+" "+second+" ");
//         printFibo(n-1,first,second);
//     }
//    public static void printFibo(int n,int first,int second){
//        if(n==0) return;
//        int third=first+second;
//        System.out.print(third+" ");
//        printFibo(n-1,second,third);
//    }
// }















//5] print sum of nth terms of fibonacci series 













// class Main {
//     public static void main(String[] args) {
//         int first=0,second=1;
//         int n=7;
        
//         System.out.print(fiboSum(n));
//     }
//     public static int fiboSum(int n){
//         if(n==0) return 0;
//         if(n==1) return 1;
//         return fiboSum(n-1) +fiboSum(n-2);
//     }
// }





//6] sum of digits















// class Main {
//     public static void main(String[] args) {
//       int n=1234;
//       System.out.print(sumOfDigits(n));
//     }
    
//     public static int sumOfDigits(int n){
//         if(n<10) return n;
        
//        return n%10+ sumOfDigits(n/10);
//     }
// }

