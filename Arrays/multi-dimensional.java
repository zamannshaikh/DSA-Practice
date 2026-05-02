// 1. Diagonal sum of a matrix


// import java.util.Scanner;
// public class Main{
//     public static void main(String[] args){
//         Scanner sc=new Scanner(System.in);
//         System.out.print("Enter row and col ");
//         int row=sc.nextInt();
//         int col=sc.nextInt();
//         int[][] arr=new int[row][col];
//         for(int i=0;i<row;i++){
//             for(int j=0;j<col;j++){
//                 arr[i][j]=sc.nextInt();
//             }
//         }
//         int leftSum=0,rightSum=0;
//         for(int i=0;i<row;i++){
//             for(int j=0;j<col;j++){
//                 if(i==j) leftSum+=arr[i][j];
//                 if(i+j==arr.length-1) rightSum+=arr[i][j];
//             }
//         }
//         System.out.print("Right sum = "+rightSum);
//          System.out.print("Left sum = "+leftSum);
        
        
//     }
// }





// 2. Transpose of a matrix


// import java.util.Scanner;
// public class Main{
//     public static void main(String[] args){
//         Scanner sc=new Scanner(System.in);
//         System.out.print("Enter row and col ");
//         int row=sc.nextInt();
//         int col=sc.nextInt();
//         int[][] arr=new int[row][col];
//         for(int i=0;i<row;i++){
//             for(int j=0;j<col;j++){
//                 arr[i][j]=sc.nextInt();
//             }
//         }
//         for(int i=0;i<row;i++){
//             for(int j=0;j<arr[i].length;j++){
//                 System.out.print(arr[i][j]+" ");
                
//             }
//             System.out.println();
//         }
        
//         System.out.println("Transpose Matrix : ");
        
//         int[][] ans=new int[col][row];
//         for(int i=0;i<ans.length;i++){
//             for(int j=0;j<ans[i].length;j++){
//                 ans[i][j]=arr[j][i];
//             }
//         }
        
//          for(int i=0;i<ans.length;i++){
//             for(int j=0;j<ans[i].length;j++){
//                 System.out.print(ans[i][j]+" ");
                
//             }
//             System.out.println();
//         }
        
        
        
//     }
// }




// 3. Rotate a matrix by 90 degree

// import java.util.Scanner;
// import java.util.Arrays;
// public class Main{
//     public static void reverse(int start,int end,int[] arr){
//         while(start<end){
//             int temp=arr[start];
//             arr[start]=arr[end];
//             arr[end]=temp;
//             start++;
//             end--;
          
            
//         }
      
//     }
//     public static void main(String[] args){
//         Scanner sc=new Scanner(System.in);
//         int n=sc.nextInt();
//         int[][] matrix=new int[n][n];
//         for(int i=0;i<matrix.length;i++){
//             for(int j=0;j<matrix[i].length;j++){
//                 matrix[i][j]=sc.nextInt();
//             }
//         }
//         for(int i=0;i<matrix.length;i++){
//             for(int j=0;j<matrix[i].length;j++){
//                 System.out.print(matrix[i][j]+" ");
//             }
//             System.out.println();
//         }
//         System.out.println();
//         for(int i=0;i<matrix.length;i++){
//             for(int j=i;j<matrix[i].length;j++){
//                 int temp=matrix[i][j];
//                 matrix[i][j]=matrix[j][i];
//                 matrix[j][i]=temp;
//             }
//         }
//         for(int i=0;i<matrix.length;i++){
          
//                 reverse(0,matrix[i].length-1,matrix[i]);                
            
//         }
//         for(int i=0;i<matrix.length;i++){
//             for(int j=0;j<matrix[i].length;j++){
//                 System.out.print(matrix[i][j]+" ");
//             }
//             System.out.println();
//         }
//     }
// }








//4. Spiral order of a matrix



// import java.util.Scanner;
// import java.util.Arrays;
// import java.util.ArrayList;
// public class Main{

//     public static void main(String[] args){
//         Scanner sc=new Scanner(System.in);
//         int n=sc.nextInt();
//         int m=sc.nextInt();
        
//         int[][] matrix=new int[n][m];
//         for(int i=0;i<matrix.length;i++){
//             for(int j=0;j<matrix[i].length;j++){
//                 matrix[i][j]=sc.nextInt();
//             }
//         }
        
//         int minrow=0,maxrow=matrix.length-1;
//         int mincol=0,maxcol=matrix[0].length-1;
//         ArrayList<Integer> ans=new ArrayList<>();
          
//          while(ans.size()<m*n){
//              for(int i=mincol;i<=maxcol && ans.size()<m*n;i++){
//                  ans.add(matrix[minrow][i]);
//              }
//              minrow++;
//              for(int i=minrow;i<=maxrow && ans.size()<m*n;i++){
//                  ans.add(matrix[i][maxcol]);
//              }
//              maxcol--;
//              for(int i=maxcol;i>=mincol && ans.size()<m*n;i--){
//                  ans.add(matrix[maxrow][i]);
//              }
//              maxrow--;
//              for(int i=maxrow;i>=minrow && ans.size()<m*n;i--){
//                  ans.add(matrix[i][mincol]);
               
//              }
//                mincol++;
             
//          } 
//          for(int i=0;i<ans.size();i++){
//             System.out.print(ans.get(i)); 
//          }
            
       
//     }
// }