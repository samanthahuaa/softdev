#Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

def rotate_left3(nums):
  x = nums.pop(0)
  nums.append(x)
  return nums

#rotate_left3([1, 2, 3])
#rotate_left3([5, 11, 9])
#rotate_left3([7, 0, 0])
