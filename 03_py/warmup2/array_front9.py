#Given an array of ints, return True if one of the first 4 elements in the array is a 9. The array length may be less than 4.

def array_front9(nums):
  n = 0
  if len(nums) < 4:
    n = len(nums)
  else:
    n = 4
  for i in range(n):
    if nums[i] == 9:
      return True;
  return False
