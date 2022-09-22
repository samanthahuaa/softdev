#Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

def sum67(nums):
  inside = False
  sum = 0
  for i in nums:
    if i == 6:
      inside = True
    elif inside == False:
      sum += i
    elif i == 7:
      inside = False
  return sum

#sum67([1, 2, 2])
#sum67([1, 2, 2, 6, 99, 99, 7])
#sum67([1, 1, 6, 7, 2])
