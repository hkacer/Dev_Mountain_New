////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add= (num1, num2)=> num1 +num2
const subs=(num1,num2)=> num1-num2
const divide= (num1,num2)=> num1/num2
const multiply= (num1,num2)=> num1*num2

const calculator= (num1,num2,mathOperation)=>{
    // if(!isNaN(num1)){

    // }
    if(+num1 && +num2){// if it can be converted to a number new num1 will be +num1
        num1=+num1;// + sign means number function
        num2=+num2;
        return mathOperation(num1,num2)

    }else{
        console.log('you need to send in numbers')
    }

    return mathOperation(num1,num2)
}

//const result= calculator(50,30,add)
//const result= calculator(50,30,subs)
//const result= calculator(50,30,multiply)
const result= calculator(50,0,divide)
//console.log(result)
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//
const applyPersentDiscount=(product,discount)=>{// it will give the persentage %20 off
    product.displayPrice=product.basePrice*(1-discount);

}
const applyFlatDiscount=(product,discount)=>{// it will give number like $10 off
    product.displayPrice=product.basePrice-discount;
}

const applyDiscount=(arr,callback,discount)=>{// this is how it will be written outside when you call it 
    arr.forEach(product=>{
        callback(product,discount);
    });
};

// applyDiscount(dogProducts,applyPersentDiscount,.1)
// console.log(dogProducts)

// applyDiscount(catProducts,applyFlatDiscount,2)
// console.log(catProducts)

const applyDiscountByCategory=(arr,category,callback,discount)=>{// this is how it will be written outside when you call it 
   
    //arr.filter(prod=>prod.category===category).forEach(prod=>callback(prod,discount))
   
    arr.forEach(product=>{
        if(product.category===category)
        callback(product,discount);
    });
};

applyDiscountByCategory(dogProducts,2,applyPersentDiscount,2.2)
//console.log(dogProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makingSandwich(bread){
    return function(ingredients){
        let order=`you order a ${bread} bread sandwich with `
        for (let i=0; i<ingredients.length;i++){
            if(i===ingredients.length-1 && i!==0 ){
                order+=` and ${ingredients[i]}`

            }else if(ingredients.length===1){
                order+=`${ingredients[i]}`
            }else{
                order+=`${ingredients[i]}`
            }

        }
        return order

    }
}
const makeWeathSandwich= makingSandwich('wheat')
makeWeathSandwich(['turket '])

let sand1=makeWeathSandwich(['turket'])
console.log(sand1)
////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map(()=>'pink')
console.log(mappedColors)

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    let formalArr= names.map((names)=>`hello ${names}`)
    // CODE HERE
    return formalArr;
}

// Call formalGreeting passing in the formalNames array
let fnames=formalGreeting(formalNames)
console.log(fnames)

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

//const placesThatStartWithA // = places.filter()
const placeTahatStarst= places.filter(places=> places[0]==='A');
console.log(placeTahatStarst)
/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE
let identifier= jobs.filter((job)=> job.programmer)[0];
let {programmer}=identifier
console.log(identifier)

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
    let reduced= numbers.reduce((acc,curr)=>acc*curr)// returns one single value
    return reduced;
}

// CODE HERE


// call productOfArray passing in numsToReduce
let resss= productOfArray(numsToReduce)
console.log(resss)
/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining= expenses.reduce((acc,curr)=>acc-curr.amount,budget)// acc initialize budget $2000
console.log(remaining)                                              //start to substract the current