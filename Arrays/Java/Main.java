// import java.util.*;
// public class Main {
//     public static void main (String[] args){
//         System.out.println("Wokring");
//         Scanner sc =new Scanner(System.in);
//         int n=sc.nextInt();
//         int[] arr= new int[n];
//         for(int i=0;i<n;i++){
//             arr[i]=sc.nextInt();
//         }
//         sc.close();
//         for(int i=0;i<n;i++){
//             System.out.print(arr[i]+" ");
//         }
        
//     }
// }



// import java.util.*;
// public class Main {
//     public static void main (String[] args){
//         System.out.println("Wokring");
//         Scanner sc =new Scanner(System.in);
//         int n=sc.nextInt();
//        ArrayList<Integer>arr=new ArrayList<>();
//         for(int i=0;i< n;i++){
//           arr.add(sc.nextInt());
//         }
//         sc.close();
//         for(int i=0;i<n;i++){
//             System.out.print(arr.get(i)+" ");
//         }
        
//     }
// }

//input separated by commas
// import java.util.*;
// public class Main {
//     public static void main (String[] args){
//         Scanner sc =new Scanner(System.in);
//         String s=sc.nextLine();
//        String[] ch=s.split(",");
//         ArrayList<Integer> arr=new ArrayList<>();
//         for(String st:ch){
//             int num =Integer.parseInt(st);
//             arr.add(num);
            
//         }
//         for(int a:arr){
//             System.out.print(a+" ");
        
//     }
// }
// }



// 1] 



// import java.util.*;
// public class Main{
//     public static void main(String[] args){
        
//         Scanner sc=new Scanner(System.in);
//         String s=sc.nextLine();
//         int star=0,hash=0;
//         for(char ch:s.toCharArray()){
//             if(ch =='*'){
//                 star++;
//             }
//             else{
//                 hash++;
//             }
//         }
//         System.out.print(star-hash);
//         sc.close();
//     }
// }






// 2]



// import java.util.*;
// public class Main{
//     public static void main(String[] args){
        
//         Scanner sc=new Scanner(System.in);
//        int n=sc.nextInt();
//        int[] arr=new int[n];
//        for(int i=0;i<n;i++){
//            arr[i]=sc.nextInt();
//        }
//        int max=arr[0];
//        int count=1;
//        for(int i=1;i<n;i++){
//            if(arr[i]>max){
//                count++;
//                max=arr[i];
//            }
//        }
//        System.out.print(count);
//     }
// }




//3 ]




// import java.util.*;
// public class Main{
//     public static void main(String[] args){
        
//         Scanner sc=new Scanner(System.in);
//         int n = sc.nextInt();
//       char[] arr=new char[n];
//       for(int i=0;i<n;i++){
//           arr[i]=sc.next().charAt(0);
//       }
//       HashMap<Character,Integer> map=new HashMap<>();
//       for(int i=0;i<n;i++){
//           map.put(arr[i],map.getOrDefault(arr[i],0)+1);
          
          
//       }
//       char ans='*';
//       for(int i=0;i<n;i++){
//           if(map.get(arr[i])%2!=0){
//               ans=arr[i];
//               break;
//           }
          
          
//       }
//       if(ans=='*'){
//           System.out.print("All are even");
//       }
//       else System.out.print(ans);
      
//     }
// }