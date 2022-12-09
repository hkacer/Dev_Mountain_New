// Starting array
let array = [28, 43, -12, 30, 4, 12]

// Write your solution below:


for( let i=0; i<array.length; i++){

    for (let j=i; j>0; j--){

        let total=0;
        total= array[i]+array[j];
        if(total===0){
            console.log(true)
        }else{
            console.log(false)
        }
    }
}


