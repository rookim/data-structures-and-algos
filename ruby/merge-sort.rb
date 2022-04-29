# helper function - merges 2 arrays together so that one properly ordered array is returned
  # takes in 2 arrays
  # intialize an array output - returns this array
  # 2 pointer technique - initialize 2 index variables to keep track of where we are in both arrays
  # while loop - index1 < array1.length && index2 < array2.length
  # conditionals to compare one element of an array to another element of the other array, and confirm which one is bigger or smaller
  # shovel in the smaller value into output array
  # increase index of array that shoveled element belonged to
  # return output array + array1 remaining elements + array2 remaining elements

# merge sort 
  # base case/exit
    # conditional to check the length of array
    # if array.length == 1, return the array
  # find middle index of input array
    # array.length / 2 => 3/2 = 1.5 -> 1
  # use middle index variable to split input array into 2
    # use map method to create arrays that contain only a specific portion of the input array
  # call the sort_two_arrays() and pass in the left and right array variables 
    # sort_two_arrays(merge_sort(left_array), merge_sort(right_array))


def merge_sort(array)
  if array.length == 1
    return array
  end

  # slice method takes in (start, length)
  middle_index = array.length / 2
  left_array = array.slice(0, middle_index)
  right_array = array.slice(middle_index, array.length - left_array.length)

  sort_two_arrays(merge_sort(left_array), merge_sort(right_array))
end

def sort_two_arrays(array1, array2)
  output = []
  index1 = 0
  index2 = 0

  while index1 < array1.length && index2 < array2.length
    if array1[index1] < array2[index2]

      output << array1[index1]
      index1 += 1
    else
      output << array2[index2]
      index2 += 1
    end
  end

  output + array1.slice(index1, array1.length - index1) + array2.slice(index2, array2.length - index2)
end

p merge_sort([3, 5, 1, 7, 1, 1, 1])