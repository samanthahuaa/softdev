#Given a string, return a new string where the first and last chars have been exchanged.

def front_back(str):
  if len(str) == 1 or len(str) == 0: #return string if it is one or less chars
    return str
  if len(str) == 2:  #switch letters if string is 2 chars 
    return str[::-1]
  else:
    return str[-1] + str[1:len(str)-1] + str[0] #swap first and last chars
