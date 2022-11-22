const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  const right = mergeSort(arr.slice(0, middleIndex));;
  const left = mergeSort(arr.slice(middleIndex));
  const sortedArr = [];
  let i = 0, j = 0;

  while (i < right.length && j < left.length) {
    if (right[i] < left[j]) {
      sortedArr.push(right[i++]);
    } else {
      sortedArr.push(left[j++]);
    }
  }

  while (i < right.length) {
    sortedArr.push(right[i++]);
  }

  while (j < left.length) {
    sortedArr.push(left[j++]);
  }
  console.log(sortedArr)
  return sortedArr;
};

export default mergeSort;
