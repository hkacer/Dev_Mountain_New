
// const decoder = code => {
//   let splitString = code.split('')
//   let wordToReturn = ''
//   // console.log(splitString)
//   for(let i =0;i < splitString.length;i++ ){
//     if(!isNaN(+splitString[i])){
//       i += +splitString[i]
//     }
//     else {
//       wordToReturn += splitString[i]
//     }
//   }
//   return wordToReturn
// }

//  console.log(decoder('2bna0p1mp2osl0e'))


const decoder=code=>{
let stringSplit= code.split('');
let wordToReturn=''

for (let i= 0; i<stringSplit.length; i++){

  if(!isNaN(+stringSplit[i])){
    i += +stringSplit[i]
  }else{
    wordToReturn += stringSplit[i]
  }
}
return wordToReturn

}
console.log(decoder('2bna0p1mp2osl0e'))