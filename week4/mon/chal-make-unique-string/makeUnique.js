// Write your solution below:
const duplicates = (str)=>{
  let res=[]
 // let letter= str.toLowerCase().trim()
  for(let i=0; i<str.length; i++){
   
    if(!res.includes(str[i]))
    res.push(str[i])

  }
 
 return res.join('')
}
console.log(duplicates('hellonoon'))