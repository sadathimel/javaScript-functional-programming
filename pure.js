// what is Pure Function
function sqr(n) {
  return n*n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))

var n = 10

function change(){
  n = 100
}
change()
console.log(n)

var point = {
  x: 45,
  y: 30
}

function printPint(point) {
  point.x = 100
  point.y = 200

  console.log(point)
}
printPint(point)

console.log(point);




