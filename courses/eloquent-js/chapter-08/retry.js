function MultiplicatorUnitFailure(message) { 
  this.message = message;
  this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Nie masz szczęścia");
}

function reliableMultiply(a, b) {
   try {
    return primitiveMultiply(a, b); 
   } catch(err) {
     if (err instanceof MultiplicatorUnitFailure) {
      console.log(err.message);
      return reliableMultiply(a, b); 
     } else {
       throw err;
   }
}
}
console.log(reliableMultiply(8, 8));
// → 64
