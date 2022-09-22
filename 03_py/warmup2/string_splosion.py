#Given a non-empty string like "Code" return a string like "CCoCodCode".

def string_splosion(str):
  s = ""
  for i in range(len(str)+1):
    s += str[:i]
  return s

# string_splosion('Code') → 'CCoCodCode'
# string_splosion('abc') → 'aababc'
# string_splosion('ab') → 'aab'
