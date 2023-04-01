function crazyArray(arr: number[]): any[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }

  return arr;
}

console.log('result: ', crazyArray([45,12,1,77,99,93,42]));
