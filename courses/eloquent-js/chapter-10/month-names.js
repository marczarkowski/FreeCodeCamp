function MonthNames() {
 const months = [
   'January', 'February', 'March', 
   'April', 'May', 'June', 
   'July', 'August', 'September',
   'October', 'November', 'December'
   ];
  
  function name(number) {
    return months[number];
  }
  
  function number(name) {
   return months.indexOf(name); 
  }
  
  return {
    name,
    number
  }
}

const month = new MonthNames();
console.log(month.name(2));
// › March
console.log(month.number("November"));
// › 10