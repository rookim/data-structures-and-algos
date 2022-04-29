// convert AlgoMonster input into a valid array of integers
function algoMonsterInputIntoArray(string) {
  let validArray = string.split(" ");
  for (let i = 0; i < validArray.length; i++) {
    validArray[i] = parseInt(validArray[i]);
  }
  return validArray;
}
// proper input!!!!!
var numbers = algoMonsterInputIntoArray("5 3 1 2 4");

// JavaScript built-in sort method
// sorts in place!
// subtracting b from a is sorting integers in ascending order
// 2 ways of writing it
// numbers.sort(function (a, b) {
//   return a - b;
// });
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// Bubble sort: looking at a window of 2 elements and swapping if the first is greater than the second
function bubbleSort(unsortedList) {
  for (let i = 0; i < unsortedList.length - 1; i++) {
    for (let j = 0; j < unsortedList.length - 1; j++) {
      let placeholder = unsortedList[j];
      if (unsortedList[j] > unsortedList[j + 1]) {
        unsortedList[j] = unsortedList[j + 1];
        unsortedList[j + 1] = placeholder;
      }
    }
  }
  return unsortedList;
}

// console.log(bubbleSort([5, 3, 1, 2, 4]));

// Insertion sort: first element is assumed to be sorted. checks following elements to see where it needs to be inserted in the sorted array

// iterate through the array
// second loop to make sure the next element is in the correct place. this loop goes backwards?
function insertionSort(unsortedList) {
  for (let i = 0; i < unsortedList.length - 1; i++) {
    for (let j = i + 1; j >= 0; j--) {
      let placeholder = unsortedList[j];
      if (unsortedList[j] < unsortedList[j - 1]) {
        unsortedList[j] = unsortedList[j - 1];
        unsortedList[j - 1] = placeholder;
      }
    }
  }
  return unsortedList;
}
// console.log(insertionSort(numbers));

// Merge sort: divide-and-conquer technique, recursive methodology to sort an array
// basically break down input array into 2s until you reach an array of only size 1
function mergeSort(array) {
  // edge case
  if (array.length <= 1) {
    return array;
  }
  // rounds number DOWNWARDS to nearest integer
  const middleIndex = Math.floor(array.length / 2);
  // returns a copy of a portion of array
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  return mergeHelperFunction(mergeSort(leftArray), mergeSort(rightArray));
}

// when arrays enter this help function, arrays are already sorted!
function mergeHelperFunction(leftArr, rightArr) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // don't want || because it's possible that an array for one element is being compared to a nonexistent element of the other array
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftElement = leftArr[leftIndex];
    const rightElement = rightArr[rightIndex];

    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
    console.log(output);
  }
  // spread operator: spreads out/unpacks elements of an iterable object (array, hash, set)
  // rest parameter (same notation ...): packs elements into an array
  // have to return it like this, because the loop is finished before the biggest number can be appended to output
  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

mergeSort([3, 8, 1]);

// output = [1]
// output = [1, 8]
