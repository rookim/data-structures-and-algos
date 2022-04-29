# capitalized words in ruby represents CONSTANTS
# can only be defined outside of methods 
# constants are used for values that are not supposed to change
# seems like only the first letter needs to be capitalized

# def find_avgs_of_subarrays(int, arr)
#   output = []
#   window_start = 0
#   window_end = 0
#   sum = 0.0
#   while window_end < arr.length
#     sum += arr[window_end]
#     if window_end >= int - 1
#       output << sum / int
#       sum -= arr[window_start]
#       window_start += 1
#     end
#     window_end += 1
#   end
#   output
# end

# p find_avgs_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])

# input: [2, 1, 5, 3, 2, 9], 2
# output: 11

# input: [1, 2, 9, 7, 1, 4], 3
# output: 18

# create a function that takes in 2 parameters: integer (int), array (arr)
# initialize some variables
  # subarray_sum = 0
  # subarray_start = 0
  # max_sum = 0
# loop through the array using a while loop !!!!
  # add element at current index of arr to the subarray_sum
  # conditional if-statement to check if window_end variable >= int - 1
    # conditional if-statement to see if subarray_sum > max_sum
      # max_sum = subarray_sum
    # subarray_sum -= arr[subarray_start]
    # subarray_start += 1
  # while loop variable increments by 1
# return max_sum

def maxSubarray(int, arr)
  subarray_sum = 0
  subarray_start = 0
  subarray_end = 0
  max_sum = 0
  while subarray_end < arr.length
    subarray_sum += arr[subarray_end]
    if subarray_end >= int - 1
      if subarray_sum > max_sum
        max_sum = subarray_sum
      end
      subarray_sum -= arr[subarray_start]
      subarray_start += 1
    end
    subarray_end += 1
  end
  max_sum
end

p maxSubarray(3, [1, 2, 9, 7, 1, 4])