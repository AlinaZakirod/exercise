// Determine if a given string contains a given letter more than X times (Your solution should be a function that takes 3 parameters, the string we are using, the letter we are checking and number we want to check for and return true or false for the solution).

function howManyTimesRepeats(someString, someLetter, someNumber){
    let numberOfRepetions = 0;
    for (let i = 0; i < someString.lenght; i++){
        for(let i = 0; j <someString.lenght; j++){
            if (i === j){
                numberOfRepetions ++
            }
            if(numberOfRepetions > someNumber){
                return true
            } else return false
        }
    }
}