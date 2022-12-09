

// function hasMoreVowels(word){
//   let vowel=["a","e","i","o","u"];
// const arr=word.split("")
// const vowelsFound=[]
// const cons=[];
// for(let i in arr){
//   if(vowel.includes(arr[i])){
//     vowelsFound.push(arr[i]);
//   }else{
//     cons.push(arr[i])
//   }
// }
// console.log(vowelsFound.join('\n')+'\n' + cons.join(''))
 
// }

// hasMoreVowels('java')

function hasMoreVowels(word){
   let vowel=["a","e","i","o","u"]
   let count=0;
   let allToLower=word.toLowerCase();
  for(let i=0; i<word.lenght;i++){
    if(vowel.includes(allToLower[i])){
      count++
    }

  }
  
  if(word.lenght-count >= word.lenght/2){
    return false 
  }else{
    return true
  }
  
  
  
  
  }
console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('yay'))