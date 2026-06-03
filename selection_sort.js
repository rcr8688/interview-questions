let arr = [7, 1, 5, 4, 3, -10, 2, 0];

function selectionSort(a = []) {
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[min] > a[j]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
}

console.log(selectionSort(arr));
