  // Find if a string has more vowels or consonants (Your solution should be a function that takes 1 parameter, the strin we are checking and return 'vowels' or 'consonant' depending of which one has more instances, 'even' if they are even).

  function checkVowelsAndConstonants(someString){
      let vowels = 0;
      let constonants = 0;
      for(let = i; i < someString.lenght; i++){
        if(someString[i] === 'a' || someString[i] === 'e'  || someString[i] === 'i' || someString[i] === 'o' || someString[i] === 'u' || someString[i] === 'y'){
            vowels ++;
          } else {
            consonants ++;
          }
      }
      if(vowels > consonants){
          return 'vowels'
      } else if ( vowels < consonants){
          return 'constonants'
      } else return 'even'
  }



