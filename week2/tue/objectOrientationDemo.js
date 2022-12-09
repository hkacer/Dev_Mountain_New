
let person= {
    'firstName': 'Chad' ,
    "lastName" : 'Boe' ,
    age: 34,
}

console.log('Dot notation', person.firstName)
console.log('Bracket notation', person.lastName)

let meal ={
    appetizer: 'chips &salsa',
    enteres: 'Burrito',
    dessert: 'churros',
    drink: 'coke'

}
//let {dessert}=meal;
//console.log(dessert)
// let {appetizer}= meal;
// console.log(appetizer)

//let {dessert: favdese,drink,enteres}=meal;

//console.log(dessert,enteres,drink)
//console.log(`this is dessert: ${favdese}`)
//console.log(`this is enteres: ${enteres}`)
//console.log(`this is drink: ${drink}`)

let meal2={ 
    appetizer: 'chips &salsa',
    enteres: 'Burrito',
    dessert: 'ros',
    drink: 'coke'
}

let meal3={
    appetizer: 'chips &salsa',
    enteres: 'Burrito',
    drink: 'coke'
}



function giveMeDesert(obj){
    if(obj['dessert']){
        return obj['dessert']
    }else{
        return'no desert'
    }
}

console.log(meal)
console.log(meal2)
console.log(meal3)


// for(let attribute in person){
//     console.log(`This is the key : ${attribute}`)
    
// }
// for(let attribute in person){
//     console.log(`this is the value: ${person[attribute]}`)
// }

person.job= 'engineer'
person ['pets']= ['dog', 'dragon']


console.log(person)
//creating classess

class Car{
 constructor(make,model,color){
    this.make=make,
    this.model=model,
    this.color=color
    this.miles=0
 }   
 drive(miles){
    this.miles+=miles;
    console.log(`${this.make} increased miles by ${miles}, \ncurrent miles: ${this.miles}`)
 }
}
let myCar=new Car('Tesla', 'Model Y', 'black')
let yourCar= new Car('toyota', 'high', )

myCar.drive(30)
yourCar.drive(45)
myCar.drive(10)


console.log(myCar)
console.log(myCar.make)

class Truck extends Car{
    constructor(make,model,color,payload, miles){
        super(make, model, color)
        this.payload=payload
    
    }
    tow(weight){
        if(weight>this.payload){
            console.log('Max payload exceeded')
        }else{
            console.log(`towing successful`)

        }
        
    }
}

let truck= new Truck('Ford','F450',' black',100 )
console.log(truck)
console.log(truck.miles)
truck.drive(15)
truck.tow(90)
truck.tow(120)