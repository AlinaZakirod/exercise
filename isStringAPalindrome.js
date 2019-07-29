//Determine if a given string is a palindrome(Your solution should be a function that takes 1 parameter, the string we are checking and return true or false for the solution).
  {return true} else return false

function isPalidrome(someString){
    for (let i = 0; i<someString.length/2; i ++ ){
        if(someString[i] === (someString.length - 1) - i){
            return true
        } else return false
    } 
}

