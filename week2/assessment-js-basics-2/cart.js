///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc,curr)=>acc+curr.price,0)
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice=(cartTotal,couponValue,tax)=>{
    return cartTotal+(cartTotal*tax)-couponValue
    

}
console.log(calcFinalPrice(10,2,0.05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    name:'String , because you have to use letters, when you need to use letter, it has to be string. when customer order their food they need name for it
    address: 'Srting' , customers need to find the retaurant with using the addres and will be string
    hours: number, canot be letters. it has to be number to be able to write this property value. customers need to know what time the restaurant will be open and what time will be closing to order their food.
    ratings: number ,customers needs to review the rating before come to the restaurant and order something to eat. they will use this rating as a reference
    special dish: 'string' customers wants to know what is the special dish in their manu so they can try




*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
myRestaurant={
    name: 'MirCeEm  Cuisine' ,
    address: '21723 Old Bend DragEvent, Spring, TX,77388' ,
    hours: 10-9 ,
    ratings: 8 ,
    specialDish: 'Lahmacun'


}

