arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

function sortArr(arr) {
  var min = 0,
    l = arr.length,
    x;

  for (var j = 0; j < l - 1; j++) {
    for (var i = j + 1; i < l; i++) {
      if (arr[i] < arr[j]) {
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
    }
  }
  return arr;
}
///////////////////////////////////////////////////////////////////////
function remove(arr, val) {
  var a = new Array(),
    l = arr.length,
    i;

  for (i = 0; i < l; i++) {
    if (arr[i] != val) a[a.length] = arr[i];
  }

  return a;
}
////////////////////////////////////////////////////////////////////////////
function removeDup(arr) {
  var a = new Array(),
    l = arr.length,
    i,
    x,
    y;

  for (i = 0; i < l; i++) {
    x = a[a.length] = arr[i];
    i++;
    while (arr[i] === x && i < l) {
      i++;
    }
    i--;
  }
  return a;
}

b = [1, 1, 2, 3, 3, 5, 6, 6, 7, 7, 8];

var a = removeDup(b);
console.log(a);
