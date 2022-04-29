// input: 2 parameters- array of numbers and integer of size of subarray
// output: an array that consists all averages of possibly subarrays of 5 contiguous elements

// function findAveragesOfSubarrays(K, arr) {
//   const result = [];
//   for (let i = 0; i < arr.length - K + 1; i++) {
//     let sum = 0.0;
//     for (let j = i; j < i + K; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / K);
//   }
//   return result;
// }

// console.log(findAveragesOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));

// function findAvgsOfSubarrays(K, arr) {
//   const result = [];
//   let windowSum = 0.0,
//     windowStart = 0;
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];
//     if (windowEnd >= K - 1) {
//       result.push(windowSum / K);
//       windowSum -= arr[windowStart];
//       windowStart += 1;
//     }
//   }
//   return result;
// }

// console.log(findAvgsOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));

// input: [1, 1, 9, 5, 0, 3], k=3
// output: [1, 9, 5] => 15

// input: [6, 0, 1, 2, 3, 15, 2], k=2
// output: [3, 15] => 18

// make a function that takes in 2 arguments: an array, arr, and an integer, k
// initialize a sum variable = 0
// initialize a maxSum variable = 0
// initialize a windowStart variable = 0
// initialize an array called subarray = []
// initialize an array called maxSumArray = []
// iterate through input array arr using a for loop => for(let windowEnd = 0; windowEnd < arr.length; windowEnd++)
//   sum += arr[windowEnd]
//   subarray.push(arr[windowEnd])
//   conditional if-statement to check if windowEnd variable >= k - 1
//     conditional if-statement to see if sum of current array is greater than maxSum variable
//       maxSum = sum
//       maxSumArray = subarray
//     sum -= arr[windowStart]
//     subarray.shift()
//     windowStart++
// return maxSumArray

// function maxSubarray(k, arr) {
//   let maxSum = 0,
//     windowStart = 0,
//     windowSum = 0;
//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];
//     if (windowEnd >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[windowStart];
//       windowStart++;
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubarray(2, [6, 0, 1, 2, 3, 15, 2]));

function sortList(unsortedList) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
}

sortList([5, 3, 1, 2, 4]);
