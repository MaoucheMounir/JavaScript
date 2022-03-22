//Exercice 1:
// Write a JavaScript program that compare two objects
// to determine if the first one contains equivalent
// property values to the second one.

var mounir = {
  name: "Mounir",
  surname: "Maouche",
  matricule: "202031044871",
};

var marouane = {
  name: "Marouane",
  surname: "Maouche",
  matricule: "202031044871",
};

function compare(obj1, ob2) {
  return Object.values(mounir).toString() == Object.values(marouane).toString();
}

console.log(compare(mounir, marouane));

// Exercice 2:
// Write a JavaScript function to find the common elements from two arrays
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2"]

var arr1 = Object.values(mounir),
  arr2 = Object.values(marouane);

function commons(arr1, arr2) {
  var arr = new Array();

  for (var i in arr1) {
    for (var j in arr2) {
      if (arr2[j] == arr1[i]) {
        arr[arr.length] = arr2[j];
        break;
      }
    }
  }
  return arr;
}

console.log(commons(arr1, arr2));
