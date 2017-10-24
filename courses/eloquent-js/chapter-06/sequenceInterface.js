function iterateOverCollection(collection, count) {
  var iterations = count <= collection.length ? count : collection.legth;
  for (let i = 0; i < iterations; i++) {
    console.log(collection[i]);
  }
}


function logFive(seq) {
  return iterateOverCollection(seq, 5);
}

logFive([1, 2]);