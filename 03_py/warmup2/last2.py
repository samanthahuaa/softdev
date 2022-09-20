#Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

def last2(str):
  last = str[-2:]
  n = 0
  if str == "":
    return 0
  for i in range(len(str)):
    s = str[i:i+2]
    if last == s:
      n += 1
  return n - 1
