var n = +readline();
for(var t = 0; t < n; t++) {
  readline();
  var arr = readline().split(' ');
  if(arr[0] === arr[1] && arr[1] === arr[2]) {
    for(var i = 3; i < arr.length; i++) {
      if(arr[i] !== arr[0]) {
        print(i + 1);
        break;
      }
    }
  } else {
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
      print(1);
      continue;
    }
    if (arr[1] !== arr[0] && arr[1] !== arr[2]) {
      print(2);
      continue;
    }
    if (arr[2] !== arr[0] && arr[2] !== arr[1]) {
      print(3);
      continue;
    }
  }
}