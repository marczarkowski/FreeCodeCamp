const groupByCentury = people => {
  return people
    .reduce((obj, person) => { 
    if (obj[Math.ceil(person.died / 100)]) {
      obj[Math.ceil(person.died / 100)].push(person);
    } else {
    obj[Math.ceil(person.died / 100)] = [person];
    }
    return obj; }, {})
}