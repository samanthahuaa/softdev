#Given a non-empty string like "Code" return a string like "CCoCodCode".

def string_splosion(str):
  s = ""
  for i in range(len(str)+1):
    s += str[:i]
  return s
