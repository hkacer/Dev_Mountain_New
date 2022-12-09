// Write your code below

// const isPalindrome= (str)=> {
//     let reversed= str.split('').tolowercase().reverse().join("")===str

// }

// console.log(isPalindrome("Racecar"))
// console.log(isPalindrome("a"))
// console.log(isPalindrome("hello"))

let isPalindrome = word =>{
    let chars = word.split("")

    for(i=0;i<chars.length/2;i++){
        if(chars[i] != chars[chars.length-i-1]){
            return 'false'
        }
    } 
    return 'true'
}

const isPalndrome = str => {
    //           j i
        // r a c e c s a r
        let start = 0;
        let end = str.length - 1;
    
        while(start < end){
            if(str[start] !== str[end]){
                return false
            }
            start++;
            end--;
        }
        return true;
    }
    
    console.log(isPalndrome("racecar"));
    console.log(isPalndrome("Racecar"))
    console.log(isPalndrome("a"))
    console.log(isPalndrome("hello"))
    console.log(isPalndrome("12321"))