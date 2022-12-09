// Write your code below

let word= 'hey'

function check(){
    for(let i=0; i<word.length;i++){
        for(let j=1; j<word.length; j++){
            if(word[i]===word[j]){
                return false
            }else{
                return true
            }
        }
    }
}
console.log(check(word))