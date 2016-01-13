var Emitter = require('events');
var emtr = new Emitter();
var eventConfig = require('./config').events;

emtr.on(eventConfig.GREET, function(){
  console.log('Somewhere, someone said ello');
});

emtr.on(eventConfig.GREET, function(){
  console.log('Another gretting!');
});

emtr.on(undefined, function(){
  console.log('lol wat');
});

console.log('Hello!');
console.log(eventConfig.greet);
emtr.emit(eventConfig.GREET);
emtr.emit(eventConfig.greet);
