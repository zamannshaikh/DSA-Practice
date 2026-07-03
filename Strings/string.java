//1] reverse a string

// Online Java Compiler
// Use this editor to write, compile and run your Java code online

// class Main {
//     public static void main(String[] args) {
//         String str="asddfghjkl";
//         StringBuilder rev= new StringBuilder();
//         for(int i=str.length()-1;i>=0;i--){
           
//            rev.append(str.charAt(i));
//         }
//         System.out.print(rev);
//     }
// }


//2] Pallindrome


// class Main {
//     public static void main(String[] args) {
//         String str = "madam";
//         int s = 0;
//         int e = str.length() - 1;
//         boolean isPallindrome = true;
        
//         while (s < e) {
          
//             if (str.charAt(s) != str.charAt(e)) {
//                 isPallindrome = false;
//                 break;
//             }
            
//             s++;
//             e--;
//         }
        
        
//         if (isPallindrome) {
//             System.out.println("Pallindrome");
//         } else {
//             System.out.println("Not Pallindrome");
//         }
//     }
// }



//3] Toggle character of strings : abBDcS => ABbdCs



// class Main{
//     public static void main(String[] args){
//         String str="abBDcS";
//         char[] ans=new char[str.length()];
//         for(int i=0;i<str.length();i++){
//             int ascii=(int) str.charAt(i);
//             if(ascii>=65 && ascii<=90){
//                 int newVal =ascii+32;
//                 char chars=(char) newVal;
//                 ans[i]=chars;
//             }
//             else {
//                 int newVal=ascii-32;
//                 char chars=(char) newVal ;
//                 ans[i]=chars;
//             }
            
            
//         }
//         String str2=new String(ans);
//         System.out.print(str2);
//     }
// }
















// 4] frequency of each element 


// import java.util.*;

// class Main{
//     public static void main(String[] args){
//         int arr[]=new int[123];
//         Arrays.fill(arr,0);
//         Scanner sc=new Scanner(System.in);
//         System.out.println("Enter String");
//         String str=sc.nextLine();
//         for(int i=0;i<str.length();i++){
//             char c=str.charAt(i);
//             int ascii=(int) c;
//             arr[ascii]=arr[ascii]+1;
            
            
            
//         }
        
//         for(int i=0;i<arr.length;i++){
//             if(arr[i]>0){
//                 char ch=(char) i;
//                 System.out.println(ch+"->"+arr[i]);
//             }
//         }
//         sc.close();
        
        
//     }
// }







//5] same question as above but the frequency should be printed in the order of the string and not alphabatically














// import java.util.*;

// class Main{
//     public static void main(String[] args){
//         int arr[]=new int[123];
//         Arrays.fill(arr,0);
//         Scanner sc=new Scanner(System.in);
//         System.out.println("Enter String");
//         String str=sc.nextLine();
//         for(int i=0;i<str.length();i++){
//             char c=str.charAt(i);
//             int ascii=(int) c;
//             arr[ascii]=arr[ascii]+1;
            
            
            
//         }
        
//         for(int i=0;i<str.length();i++){
//             char c=str.charAt(i);
//             int ascii=(int) c;
//            if(arr[ascii]>0){
//                 System.out.println(c+"->"+arr[ascii]);
//            }
//            arr[ascii]=0;
//         }
//         sc.close();
        
        
//     }
// }

