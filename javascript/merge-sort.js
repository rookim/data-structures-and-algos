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
