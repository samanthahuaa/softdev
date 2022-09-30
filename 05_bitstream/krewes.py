"""
Ravindra Mangar and Samantha Hua
SoftDev
TNPG: Working On It
K05 -- 05_bitstream -- Manipulating dictionaries and reading files.
2022-09-29
time spent: 1.5hrs

DISCO:
  - .count(element) will count how much of that element is present in the array.
  - .pop(index) will remove the element at that index in the array.
  - .replace("a","b") will replace every instance of "a" in a array with "b". We used this to get rid of empty lines by replacing r"\n" with "".

QCC:
  - None

"""

import random

krewes = {}
#Create a new dictionary

try:

  with open("krewes.txt", "r") as f:
    f = f.read()
    #Read file, turn it into string
    f = f.replace("\n","")
    #Replace blank strings
    f = f.split("@@@")
    #Split devos
    for item in f:
      item = item.split("$$$")
      #Split between entities for each devo
      keys = list(krewes.keys())
      #Current keys within the dictionary
      key = item[0]
      #key takes the value of the period of each devo
      item.pop(0)
      #This is the key of the dictionary soo...we don't need this anymore
      if keys.count(key) == 0:
        krewes[key] = [item]
      #If period of devo is not created already, make it.
      else:
        krewes[key].append(item)
      #Adds devo name + ducky name in list form to dictionary

except:
  
  print("An Error Has Occured")
      
def randomizer(dictionary):
  rand_key = random.choice(list(dictionary.keys()))
  rand_val = random.choice(dictionary[rand_key])
  return rand_val

#print(randomizer(dictionary))
for i in range(100):
  print(randomizer(krewes))
