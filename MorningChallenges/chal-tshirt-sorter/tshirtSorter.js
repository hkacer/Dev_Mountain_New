// Write your solution below:
// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll



const shirtSize= (str)=>{
  let small='';
  let medium='';
  let large='';
  let diff='';
  let strToLower=str.trim('').toLowerCase();
  
  for(let i=0; i<strToLower.length; i++){

    if(strToLower[i]==='s'){
      small+='s'
     // console.log(count)
    }else if(strToLower[i]==='m'){
      medium+='m'
      //console.log(count)
    }else if(strToLower[i]==='l'){
      large+='l'
      //console.log(count)
    }else{
      diff+=''
     // console.log(count)
    }

  }
  return (small+medium+large)
}
console.log(shirtSize('sssklllmm'))