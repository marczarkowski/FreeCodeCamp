/*
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true.

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'.
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent({ likesES2015 = true, likesJavaScript = true } = {}) {
  if (likesES2015 && likesJavaScript) {
    return 'The student likes JavaScript and ES2015!';
  } else if (likesJavaScript) {
    return 'The student likes JavaScript!';
  } else if (likesES2015) {
    return 'The student likes ES2015!';
  } else {
    return 'The student does not like much...';
  }
}
