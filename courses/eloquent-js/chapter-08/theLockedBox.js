function withBoxUnlocked(body) {
  var isLocked = box.locked;
 	try {
      if (isLocked) {
       box.unlock();
      }
      body();
    } catch (err) {
     console.log(err); 
    } finally {
     if (!isLocked) {
       box.lock();
     }
    }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
