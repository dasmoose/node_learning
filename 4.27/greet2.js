exports.greet = function() {
  console.log('Hello!');
}

console.log(exports);
console.log(module.exports);

// Simply mutating the object will matain the references 
