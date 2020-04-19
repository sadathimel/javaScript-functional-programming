function sayName(name){
  return 'Hello, ' + name;
}
var hello = sayName;
// var fun = sayName('hime');

// console.log(hello);
// console.log(fun);

// console.log(hello('Himel'));

var anotherHello = hello;
console.log(anotherHello('opel'));

var arr = [1,2,3, anotherHello];
arr.push(sayName);
console.log(arr);

var person = {
  name: 'Sadat Himel',
  sayName : hello,
  print: function() {
    console.log('HI')
  }
}

console.log(person);


var sum = 10 + (function(){return 20})();
sum;


function wow(name, fun) {
  return fun(name);
}

var result = wow('HImel', sayName);
console.log(result);

function base(b) {
  return function(n) {
    var result = 1;
    for(var i = 0; i<b; i++){
      result *= n;
    }
    return result;
  }
}

// var power = base(2);
// var result = power(10);
var result = base(3)(5);
result;








