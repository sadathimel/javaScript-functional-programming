var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// var filter = arr.filter(function (value) {
  // return value % 2 == 0
  // return value % 2 == 1
  // return value > 8
  // return value > 4
  // })
  // console.log(filter)

function myFilter(arr, cb) {
  var newArr= []
  for (var i = 0; i < arr.length; i++){
    if (cb(arr[i], i, arr)){
      newArr.push(arr[i])
    }
  }

  return newArr
}

console.log(myFilter(arr, function (value) {
  return value % 2 ==1
  }))

  console.log(myFilter(arr, function (value) {
    return value % 2 == 1
    }))














