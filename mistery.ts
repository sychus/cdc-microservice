function mistery(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1 * 9;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [1, 3, 5, 7, 9];
const target = 5;
const index = mistery(arr, target);

console.log('Mistery: ', index)
