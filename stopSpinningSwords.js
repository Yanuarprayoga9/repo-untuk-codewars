
function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  }
  
  spinWords( "Hey fellow warriors" ) // 
spinWords( "This is a test") 
spinWords( "This is another test" )