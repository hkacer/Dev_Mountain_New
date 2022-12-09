/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let johnSnowAttack= 25;
let jenLanisterAttack= 35;

if (jenLanisterAttack>johnSnowAttack){
    console.log(`JeanLeanister attack is greater`)
}else if(jenLanisterAttack<johnSnowAttack){
    console.log(`john attack is greater`)
}else{
    console.log(`their attac is equal`)
}

let johnSnowHealth= 100;
let JeanLeanisterHealth= 0;

if(johnSnowHealth<=JeanLeanisterHealth){
    johnSnowHealth= 0;
    console.log(`John has been slain`);

}else{
    johnSnowHealth= johnSnowHealth-jenLanisterAttack
    //johnSnowHealth -=jenLanisterAttack
    console.log(`john's health is down to ${johnSnowHealth}`)
}

let healthKit= 50;
 
if(johnSnowHealth + healthKit >50){
    johnSnowHealth=100;
}else{
    johnSnowHealth+=healthKit;
}




//if(johnSnowHealth>=healthKit){
  //  johnSnowHealth=100;
//}else{
 //   johnSnowHealth+=50;
//}



// jon picks up a shield, add to his defense
let johnSnowDefense =25;


// jamie attacks again
if(johnSnowHealth<= jenLanisterAttack- johnSnowDefense){
    console.log(`jon has been slain`)
}else{
    johnSnowHealth -= jenLanisterAttack-johnSnowDefense;
    console.log(`jon's health is down to ${johnSnowHealth}`)
}

let coinLandsHeads= false;

if(coinLandsHeads !==true){
    console.log(`Jon has ran away`)
}else{
    console.log(`jamie take Jon's head`)
}



for(let i=1; i<=5; i++){
    johnSnowHealth-=jenLanisterAttack;
    if(johnSnowHealth<=0){
        johnSnowHealth=0;
    }
    console.log(`jon's health is  ${johnSnowHealth}`)

    if(johnSnowHealth<=0){
        console.log(`jon has been slain`)
        break;

    }
}
console.log("hey you are done really");
console. log( "is it working?")
