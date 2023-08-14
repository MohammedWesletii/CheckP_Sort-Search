function inserSort(array) {
  for (var i = 1; i < array.length; i++) {
    var Element = array[i];
    var j = i - 1;

    while (j >= 0 && array[j] > Element) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = Element;
  }
  return array;
}
console.log(inserSort(([5, 2, 9, 1, 5, 6])));