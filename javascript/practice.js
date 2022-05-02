// sort method
// uses recursion!!!
// idea of splitting given array all the way until there is only one element in the array. one array means sorted!!
// mergeSort() => recursive function
//   base case/exit: if array.length === 1
//      return array
//   indexSplit = Math.floor(array.length / 2) => length of 3 means indexSplit is 1
//   leftArray = slice method(0, indexSplit) => [1]
//   rightArray = slice method (indexSplit) => [2, 3]
// return mergeHelperFxn(mergeSort(leftArray), mergeSort(rightArray))
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// mergeHelperFxn, takes in 2 arguments (both arrays)
// create output array, which will return a sorted array
// create 2 variables to keep track of indexes in both arrays
//   leftIndex and rightIndex = 0
// while loop, as long as both indexes are less than the length of their respective arrays
// have a conditional to compare numbers of both arrays. whichever is smaller is first appended to output array

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  return sortArrays(mergeSort(leftArray), mergeSort(rightArray));
}

function sortArrays(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let output = [];

  while (index1 < arr1.length && index2 < arr2.length) {
    let num1 = arr1[index1];
    let num2 = arr2[index2];
    if (num1 < num2) {
      output.push(num1);
      index1++;
    } else {
      output.push(num2);
      index2++;
    }
  }

  // spread operator
  return [...output, ...arr1.slice(index1), ...arr2.slice(index2)];
}

console.log(mergeSort([5, 1, 2, 453, 2, 1, 6, 78, 93, 2]));
