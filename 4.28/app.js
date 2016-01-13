var util = require('util');

var name = 'Jenny';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
