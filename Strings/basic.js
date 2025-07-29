const prompt = require("prompt-sync")();;

// 1] print every character of a stirng in a new line

// let s="javascript";
// for(let i=0;i<s.length;i++){
//     console.log(s.charAt(i))
// }










// 2] reverse a string 




// let s="hello"
// let rev="";
// for(let i=s.length-1;i>=0;i--){
//     rev+=s.charAt(i)
// }
// console.log(rev);













// 3] check if a string is pallindrome or not using two pointer appoach




// let str= "radar";
// let s=0 ,e=str.length-1 ;
// let isPalindrome= true
// while(s<e){
//      if(str.charAt(s)!=str.charAt(e)) {
//         isPalindrome=false
//         break
//      }
    
//      s++
//      e--



//      }
//      if(isPalindrome) console.log("palindrome");
//         else console.log("Not palindrome")     








// 4] Toggle character of strings : abBDcS => ABbdCs

// approch : 1] if we can find whether the character is upper case or lower case we
// can toggle it with the help of string's methods ,to find upper or lower case
// we can check it with the help of asci value [A-Z: 65-90 and a-z :97-122]
// 2] to convert from upper to lower or vice versa: the difference between the
// ascii value of characters is 32 for example if A=>a here the ascii value of
// A=65 and if i add 65+32=97 which is the ascii value of a

// let str= prompt("Enter a string");
// let ans="";
// for (let i=0;i<str.length;i++){
//     let ascii= str.charCodeAt(i);
//     if(ascii >=65 && ascii <=90){
//        ans+= String.fromCharCode(ascii+32)

//     }
//     else {
//          ans+= String.fromCharCode(ascii-32)

//     }
    
// }
// console.log(ans); 












// 5] take an array of strings words and a string prefix "pref",print the number
// of strings contains that prefix example : input : ["attention,attribute.car
// ,bike"] ,pref="at" count=2








// let word=["attention", "attire","hello", "atlas"];
// let pref= "at";
// let count=0;
// for(let i=0;i<word.length;i++){
//     if(word[i].startsWith(pref)) count++
// }
// console.log(count);













// 6] capitalize the first and last character of every word in a sentence
// example : hello kaise ho => HellO KaisE HO;








// let s= " hello kaise  ho aaiba log";
// let ans=""
// split method take regex and based on that it seperates the words i a sentence
// here it is spliting based on space
// let arr= s.split(" ");

// for(let i=0;i<arr.length;i++){
//     let word= arr[i];
//     if(word.length<=2) ans=ans+word.toUpperCase() +" ";
//     else{
//        ans+= word.charAt(0).toUpperCase() + word.substring(1,word.length-1) + word.charAt(word.length-1).toUpperCase() +" "
//     }

// }
// console.log(ans)














// 7] print frequency of each character in a string;







// let str= prompt("Enter a string ");
// let freqArr= new Array(123).fill(0);
// for(let i=0;i<str.length;i++){
//     let ascii=str.charCodeAt(i);
//     freqArr[ascii] =freqArr[ascii] + 1;

// }
// for(let i=0;i<freqArr.length;i++){
//     if(freqArr[i]>0){
//         console.log(String.fromCharCode(i) +" -> " + freqArr[i]);
//     }
// }
















// 8] check whether the given strings are anagram or not ,example of anagrams:
// arc and car , state and taste, thing and night





// let s1=prompt("enter 1st string ");
// let s2= prompt("Enter 2nd srtig ");
// let freqArr=new Array(123).fill(0);
// if(s1.length!=s2.length){
//     console.log("Given strings are not Anagram");
    
// }
// else {
//     let isAnagram=true;
//     for(let i=0;i<s1.length;i++){
//         let ascii= s1.charCodeAt(i);
//         freqArr[ascii]= freqArr[ascii] +1;
//     }

//      for(let i=0;i<s2.length;i++){
//         let ascii= s1.charCodeAt(i);
//         freqArr[ascii]= freqArr[ascii] -1;
//     }
//     for(let i=0;i<freqArr.length;i++){
//         if(freqArr[i]!=0){
//             isAnagram=false;
//             break;
//         }
//     }
//     if(isAnagram) console.log("Given Strings are Anagram")
//         else console.log("Given Strings are not Anagram")

// }




















