// - Create a for loop that prints the number from 1 to 100.
for (let i  = 1; i <= 100; i ++ ){
    console.log(i)
}


// - Create a for loop that prints the number from 1 to a number given by the user.
let x; //for user number
for( let i = 1; i < x; i ++){
    console.log(i)
}


// - Create a for loop that prints the only even numbers between 1 and 100.
for (let i  = 0; i <= 100; i ++ ){
    if(i % 2 === 0){
        console.log(i);
    }
    
}

// - Create a for loop that prints the only odd numbers between 1 and 100.
for (let i  = 1; i <= 100; i ++ ){
    if(i % 2 !== 0){
        console.log(i)
    }
}


// - Create a for loop that prints the only numbers multiples of 3 between 1 and 100.
for (let i  = 1; i <= 100; i ++ ){
   if(i % 3 === 0){
    console.log(i)
   }
}


// - Create a for loop that prints the only numbers multiples of 3 or 5 between 1 and 100.
for (let i  = 1; i <= 100; i ++ ){
    if(i % 15 === 0){
        console.log(i)
    }
}
// - Create a for loop that prints the only prime numbers between 1 and 100.
for (let i  = 1; i <= 100; i ++ ){
   for(let x = 2; x < i; x++){
    if(i % x !== 0){
        console.log(i)
    }
   }
}


// - Create a for loop that prints only numbers greater than 20 and less 80 and divisible by  4.
for( let i = 20; i < 80; i ++){
    if(i % 4 === 0){
        console.log(i)
    }
}

// - Create a for loop that prints only prime numbers greater than 10 and less 100.
for (let i  = 10; i <= 100; i ++ ){
    for(let x = 2; x < i; x++){
     if(i % x !== 0){
         console.log(i)
     }
    }
 }