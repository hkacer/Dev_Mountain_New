let jonsHealth= 100;
// // converting a string
// jonsHealth=String(jonsHealth);
// jonsHealth=toString(jonsHealth)

// // converting to a number
// jonsHealth=parseInt(jonsHealth)
// jonsHealth=jonsHealth+'health'

// // converting to a boolean
// jonsHealth=Boolean(jonsHealth)

console.log( jonsHealth);

let theWinneris= 'Jamie is the winner';
// replace method
let newWinner= theWinneris.toLowerCase().replace('jamie', 'jon')



//includes

if(newWinner.toLowerCase().includes('jon')){
    console.log('replaced sucessfully')
}else{
    console.log('not replaced')
}

console.log(newWinner)
//convert to kebab-case eg.jon-is-the-winner
let newWinnerReplace= newWinner.toLowerCase().replace(' ', '-')
//console.log(newWinnerReplace)
let winnerJoin= newWinner.toLowerCase().split(' ').join('-')
console.log(winnerJoin)

//functions

isJonAlive();
function isJonAlive(){
    if(jonsHealth>0){
    console.log('jon is alive')

    }  else{
    console.log('jon is dead')
    }

}
isJonAlive();

// arrow function
// const isJonAlive=() => {
//     if(jonsHealth>0){
//         console.log('jon is alive')
    
//         }  else{
//         console.log('jon is dead')
//         }
// }

// creatr a function to launch attack to Jon

function supriceAttack(attack){
    jonsHealth -= attack;
    isJonAlive()
    //jonsHealth= jonsHealth-attack -same thing with up one
    
}

supriceAttack(20);
supriceAttack(10);
supriceAttack(23);
supriceAttack(60);
//let reaminingPlusShield= supriceAttack(10)+5
 
// multiple parameters
function greetings(person1, person2){
    console.log(`${person1} and ${person2} are saying hello to each other`)
}
greetings('ned', 'jon')

// functions with returns

function diceRoll(){
     let possibleRolls=[1,2,3,4,5,6]
     let randomIndex=Math.floor(Math.random() * possibleRolls.length )
     return possibleRolls[randomIndex]
}




function diceMultiplyer(){
    let firstRoll= diceRoll()
    let secondRoll= diceRoll()
    return firstRoll * secondRoll
}

let multipyRoll= diceMultiplyer()
console.log(multipyRoll)
//console.log(firstRoll,secondRoll) //it will not work because it is inside of the function not outside

