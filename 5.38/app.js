var obj = {
  name: 'Jennifer Coryell',
  greet: function(number, fruit) {
    console.log(`Hello3 ${this.name}, I have ${number} ${fruit}`);
  }
}

obj.greet(2, 'catberry');
obj.greet.call({ name: 'Jane Doe' }, 5, 'berry');
obj.greet.apply({ name: 'Jane Doe' }, [3, 'rasp']);
