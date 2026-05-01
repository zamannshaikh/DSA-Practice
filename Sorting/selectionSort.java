import java.util.Arrays;
public class Main{
    public static void main(String[] args){
        int[] arr={4,3,10,1,2};
        for(int i=0;i<arr.length-1;i++){
            int small=i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[small]>arr[j]){
                   small=j;
                }
              
                
            }
              if(i!=small){
                     int temp=arr[small];
                    arr[small]=arr[i];
                    arr[i]=temp;
                }
                
        }
        System.out.print(Arrays.toString(arr));
        
    }
}