#Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

def max_end3(nums):
  if nums[0] > nums[2]:
    return [nums[0], nums[0],nums[0]]
  else:
    return [nums[2], nums[2],nums[2]]

#max_end3([1, 2, 3])
#max_end3([11, 5, 9])
#max_end3([2, 11, 3])
