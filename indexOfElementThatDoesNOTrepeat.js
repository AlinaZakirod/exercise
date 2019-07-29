// Find the position of the first letter that does not repeat inside of a string.(Your solution should be a function that takes 2 parameters, the string and the letter we are looking for and return the index of the letter or -1 if all letters repeat).


function firstNoRepaet(someString, theLetter){
	for (let i = 0; i < someString.length; i++){
        for (let j = 0; j < someString.length; j++){
            if( i === theLetter || i === j){
                return i
            } else return -1
        }
    }
}

