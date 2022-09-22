# Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

def sum13(nums):
  n = 0
  for i in range(len(nums)):
    if i == 0:
      if nums[i] != 13:
        n+= nums[i]
        continue
    if nums[i] != 13 and nums[i-1] !=13:
      n += nums[i]
  return n

# sum13([1, 2, 2, 1]) → 6
# sum13([1, 1]) → 2
# sum13([1, 2, 2, 1, 13]) → 6
