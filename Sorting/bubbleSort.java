import java.util.Arrays; // Required to print the array properly

public class Main {
    public static void main(String[] args) {
       int[] arr = {5, 3, 1, 9, 7};
       
       for(int i = 0; i < arr.length - 1; i++){
         // Added "- 1" to prevent the out-of-bounds error
         for(int j = 0; j < arr.length - i - 1; j++){
             if(arr[j] > arr[j+1]){
                 int temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
             }
         }
       }
       
       // Use Arrays.toString to print the actual values instead of the memory address
       System.out.println(Arrays.toString(arr));
    }
}