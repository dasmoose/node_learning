var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log('Somewhere, someone said ello');
});

emtr.on('greet', function(){
  console.log('Another gretting!');
});

console.log('Hello!');
emtr.emit('greet');
