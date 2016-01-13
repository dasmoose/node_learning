exports = function() {
  console.log('Hello');
}

console.log(exports);
console.log(module.exports);

// When a variable is set to the new value it changes
// its location in memory
// first line breaks the references
