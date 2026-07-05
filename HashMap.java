//1] count frequency using HashMap


// import java.util.HashMap;
// import java.util.Map;
// class Main{
//     public static void main(String[] args){
//         int arr[]={1,2,3,2,1,23,4,5,4,4,5,2};
//         HashMap<Integer,Integer> map=new HashMap<>();
//         for(int i:arr){
//             if(map.containsKey(i)){
//                 map.put(i,map.get(i)+1);
//             }
//             else map.put(i,1);
//         }
        
//         for(Map.Entry<Integer,Integer> entry:map.entrySet()){
//             int key=entry.getKey();
//             int val=entry.getValue();
//             System.out.println(key+"=>"+" "+val);
//         }
//     }
// }












//2] same question but using enchanced methods of map









// import java.util.HashMap;
// import java.util.Map;
// class Main{
//     public static void main(String[] args){
//         int arr[]={1,2,3,2,1,23,4,5,4,4,5,2};
//         HashMap<Integer,Integer> map=new HashMap<>();
//         for(int i:arr){
//             map.put(i,map.getOrDefault(i,0)+1);
//         }
        
//         for(Map.Entry<Integer,Integer> entry:map.entrySet()){
//             int key=entry.getKey();
//             int val=entry.getValue();
//             System.out.println(key+"=>"+" "+val);
//         }
//     }
// }







//3] two sum(leetcode)




// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         HashMap<Integer,Integer> map=new HashMap<>();
//         int ans[]={-1,-1};
//         for(int i=0;i<nums.length;i++){
//             if(map.containsKey(target-nums[i])){
//                 ans[0]=map.get(target-nums[i]);
//                 ans[1]=i;
//                 return ans;

        
//             } else{
//                 map.put(nums[i],i);
//             }
//         }
//         return ans;
        
//     }
// }













//]4 first letter to appear twice (leet code)










// class Solution {
//     public char repeatedCharacter(String s) {
//         HashMap<Character,Integer> map=new HashMap<>();
//         for(int i=0;i<s.length();i++){
//             char ch=s.charAt(i);
//             map.put(ch,map.getOrDefault(ch,0)+1);
//             if(map.get(ch)==2) return ch;
//         }
//         return s.charAt(0); 
        
//     }
// }









//5] sort the people (leetcode)





// class Solution {
//     public String[] sortPeople(String[] names, int[] heights) {
//         HashMap<Integer,String> map=new HashMap<>();
//         String[] ans =new String[names.length];
//         for(int i=0;i<names.length;i++){
//             map.put(heights[i],names[i]);
//         }
//         Arrays.sort(heights);
//         int s=0;
//         int e=heights.length-1;
//         while(s<e){
//             int temp=heights[s];
//             heights[s]=heights[e];
//             heights[e]=temp;
//             s++;
//             e--;
//         }


//        for(int i=0;i<names.length;i++){
//         ans[i]=map.get(heights[i]);
//        }

//        return ans;


        
//     }
// }
