// Binary Search
const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < num) {
      start = mid + 1;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(binarySearch([1, 2, 5, 7, 90], 1));
