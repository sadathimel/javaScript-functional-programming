// First Class function

function add(a,b){
  return a + b
}

//1. function can be stored ia a variable
var sum = add
console.log(sum(4,5))
console.log(typeof sum)

//2 function can be stored ia an Array
var arr = []
  arr.push(add)
  console.log(arr)
  console.log(arr[0](5,4))

//3 function can be stored ia an Object