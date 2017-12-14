/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

/* 5 - Given the following code:


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'

    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

const instructor = {
  firstName: 'Colt',
  sayHi() {
    setTimeout(() => {
      console.log(`Hello ${this.firstName}`);
    }, 1000);
  },
};
