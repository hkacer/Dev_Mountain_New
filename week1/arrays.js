let backpack=[];
//let add sword, shield, food

backpack.push('sword', 'shiled', 'food');
console.log(backpack )

//backpack.shift();// shift removes from begining
//console.log(backpack);

let sword = backpack.splice(0,1);// change the array after using this
console.log(backpack);

//backpack.pop();// removes from  end
//console.log(backpack);

let furCoat= 'fur Coat';
backpack.push(furCoat);// adds to the backpack
console.log(backpack);

backpack.pop(furCoat);// remove from the end
console.log(backpack);

let countItems= backpack.length// see how mnay items in there
console.log(countItems);

backpack.push('flint', 'knife', 'toothbrush','blanket');
console.log(backpack);
console.log(`The items count: ${countItems}`);

let backpack2= backpack.splice(2,4);
console.log(`backpack2= ${backpack2}`);
console.log(`backpack1= ${backpack}`);


console.log(...backpack2)// you can use ... to have all items
///console.log(backpack2[1]);// this is how you can write

console.log(`================================`)


for( let i= 0; i<backpack.length; i++){
    console.log(backpack[i]);
}
console.log(`============================`)
for( let i= 0; i<backpack2.length; i++){
    console.log(backpack2[i]);
}




