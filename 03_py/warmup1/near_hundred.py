#Given an int n, return True if it is within 10 of 100 or 200. Note: abs(num) computes the absolute value of a number.

def near_hundred(n):
  if n >= 90 and n <= 110:
    return True
  elif n >= 190 and n <= 210:
    return True
  else:
    return False

# near_hundred(93) → True
# near_hundred(90) → True
# near_hundred(89) → False
