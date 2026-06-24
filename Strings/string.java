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


class Main {
    public static void main(String[] args) {
        String str = "madam";
        int s = 0;
        int e = str.length() - 1;
        boolean isPallindrome = true;
        
        while (s < e) {
          
            if (str.charAt(s) != str.charAt(e)) {
                isPallindrome = false;
                break;
            }
            
            s++;
            e--;
        }
        
        
        if (isPallindrome) {
            System.out.println("Pallindrome");
        } else {
            System.out.println("Not Pallindrome");
        }
    }
}
